const express = require('express');
const router = express.Router();
const addressController = require('../controller/AddressController');

// Thêm địa chỉ mới cho người dùng
//http://localhost:3000/address/:userId/createAddress
router.post('/:userId/addUserAddress', addressController.addOrUpdateUserAddressHandler);

// Lấy danh sách địa chỉ của người dùng
//http://localhost:3000/A/:userId/getAddress
router.get('/:userId/getAddress', addressController.getUserAddresses);

// Cập nhật địa chỉ của người dùng
//http://localhost:3000/address/:userId/:addressId/updateAddress
router.post('/:userId/updateAddress', addressController.updateDefaultAddress);

// Xóa địa chỉ của người dùng
//http://localhost:3000/address/:userId/:addressId/deleteAddress
router.delete('/:userId/deleteAddress', addressController.deleteAddress);

router.get('/:addressId/getaddress', addressController.getAddress);

module.exports = router;
