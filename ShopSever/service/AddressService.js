const AddressModel = require('../model/AddressModel');
const mongoose = require('mongoose');
const UserModel = require('../model/UserModel');

// Thêm địa chỉ mới cho người dùng
const addOrUpdateUserAddress = async (userId, addressId, addressLine1, addressLine2,addressLine3,addressLine4, isDefault) => {
  try {
    // Bước 1: Cập nhật các địa chỉ hiện có có isDefault: true thành isDefault: false
    await AddressModel.updateMany({ userId, isDefault: true }, { isDefault: false });
    // Bước 2: Thêm địa chỉ mới
    let address = await AddressModel.create({
      userId,
      addressId: new mongoose.Types.ObjectId(),
      addressLine1,
      addressLine2,
      addressLine3,
      addressLine4,
      isDefault,
    });
    const user = await UserModel.findById(userId, 'name mobile');

    // Combine the user information with the address details and return it
    const addressWithUser = {
      user: {
        name: user.name,
        mobile: user.mobile,
      },
      address: address,
    };

    return addressWithUser;
  } catch (error) {
    
    throw new Error(error.message);
  }
};

// Lấy danh sách địa chỉ của người dùng
const getUserAddresses = async (userId) => {
  try {
    const address = await AddressModel.find({ userId });

    const user = await UserModel.findById(userId, 'name mobile');

    const addressWithUser = {
      user: {
        name: user.name,
        mobile: user.mobile,
      },
      address: address,
    };

    return addressWithUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Cập nhật địa chỉ mặc định của người dùng
const updateDefaultAddress = async (userId, addressId, addressLine1, addressLine2,addressLine3,addressLine4, isDefault) => {
  try {
    const updateFields = { addressLine1, addressLine2,addressLine3,addressLine4 };
    if (isDefault !== undefined) {
      updateFields.isDefault = isDefault;
      if (isDefault) {
        await AddressModel.updateMany({ userId }, { isDefault: false });
      }
    }
    const address = await AddressModel.findOneAndUpdate(
      { userId, addressId },
      updateFields,
      { new: true }
    );
    return address;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Xóa địa chỉ của người dùng
const deleteAddress = async (userId, addressId) => {
  try {
    const address = await AddressModel.findOne({ userId, addressId });
    // Kiểm tra nếu địa chỉ không phải là địa chỉ mặc định
    if (!address.isDefault) {
      await AddressModel.findOneAndRemove({ userId, addressId });
      return address;
    } else {
      throw new Error("Không thể xóa địa chỉ mặc định");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};


module.exports = {
  addOrUpdateUserAddress,
  getUserAddresses,
  updateDefaultAddress,
  deleteAddress,
};
