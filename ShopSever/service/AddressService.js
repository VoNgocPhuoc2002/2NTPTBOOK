const AddressModel = require('../model/AddressModel');
const mongoose = require('mongoose');

// Thêm địa chỉ mới cho người dùng
const addOrUpdateUserAddress = async (userId, fullName, phoneNumber, addressLine1, addressLine2, addressLine3, addressLine4) => {
  try {
    let addresses = await AddressModel.findOne({ userId });

    if (addresses) {
      // Update existing address
      addresses.address.push({
        addressId: new mongoose.Types.ObjectId(),
        fullName: fullName,
        phoneNumber: phoneNumber,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        addressLine3: addressLine3,
        addressLine4: addressLine4,
      });

      await addresses.save();
      return addresses;
    } else {
      // Create new address
      const newAddresses = new AddressModel({
        userId: userId,
        address: [
          {
            addressId: new mongoose.Types.ObjectId(),
            fullName: fullName,
            phoneNumber: phoneNumber,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            addressLine3: addressLine3,
            addressLine4: addressLine4,
          },
        ],
      });

      await newAddresses.save();
      return newAddresses;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};


// Lấy danh sách địa chỉ của người dùng
const getUserAddresses = async (userId) => {
  try {
    const address = await AddressModel.find({ userId });    
    return address;
  } catch (error) {
    throw new Error(error.message);
  }
};
// Hàm truy vấn đối tượng địa chỉ từ cơ sở dữ liệu
const getAddressByAddressId = async (addressId) => {
  try {
    const userWithAddress = await AddressModel.findOne({ "address.addressId": addressId });

    if (userWithAddress) {
      const targetAddress = userWithAddress.address.find(addr => addr.addressId.toString() === addressId);
      return targetAddress;
    }

    return null;
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
  getAddressByAddressId
};
