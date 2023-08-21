const addressService = require('../service/addressService');

// Thêm địa chỉ mới cho người dùng
// Update the route handler to have a unique name, e.g., 'addOrUpdateUserAddressHandler'
const addOrUpdateUserAddressHandler = async (req, res) => {
    const { userId } = req.params;
    const { fullName, phoneNumber, addressLine1, addressLine2, addressLine3, addressLine4 } = req.body;

    try {
      const address = await addressService.addOrUpdateUserAddress(userId, fullName, phoneNumber, addressLine1, addressLine2, addressLine3, addressLine4);
    //   res.status(200).json({ message: 'Address added or updated successfully', address });
        res.status(200).json({ address });

      console.log(address);
    } catch (error) {
      res.status(500).json({ message: 'Failed to add or update address', error: error.message });
      console.log(error);
    }


 
  };
  

// Lấy danh sách địa chỉ của người dùng
const getUserAddresses = async (req, res) => {
    const { userId } = req.params;
    try {
        const addresses = await addressService.getUserAddresses(userId);
        res.status(200).json({ addresses });
        console.log(addresses);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get user addresses', error: error.message });
        console.log(error);
    }
};

// Controller function
const getAddress = async (req, res) => {
  try {
    const { userId,addressId } = req.params;
    const targetAddress = await addressService.getAddressByAddressId(userId,addressId);

    if (targetAddress) {
      res.status(200).json({ address: targetAddress });
      console.log('Thông tin địa chỉ:', targetAddress);
    } else {
      res.status(200).json({ address: null });
      console.log('Không tìm thấy địa chỉ');
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to get address', error: error.message });
    console.log("Error:", error);
  }
};





// Cập nhật địa chỉ mặc định của người dùng
const updateDefaultAddress = async (req, res) => {
    const { addressId, addressLine1, addressLine2,addressLine3, addressLine4, isDefault } = req.body;
    const { userId } = req.params;
    try {
        const address = await addressService.updateDefaultAddress(
            userId,
            addressId,
            addressLine1,
            addressLine2,
            addressLine3,
            addressLine4,
            isDefault
        );
        res.status(200).json({ message: 'Default address updated successfully', address });
        console.log(address);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update default address', error: error.message });
        console.log(error);
    }
};

// Xóa địa chỉ của người dùng
const deleteAddress = async (req, res) => {
    const { addressId } = req.body;
    const { userId } = req.params;
    try {
        const address = await addressService.deleteAddress(userId, addressId);
        res.status(200).json({ message: 'Address deleted successfully', address });
        console.log(address);
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete address', error: error.message });
        console.log(error);
    }
};

module.exports = {
    addOrUpdateUserAddressHandler,
    getUserAddresses,
    updateDefaultAddress,
    deleteAddress,
    getAddress
};
