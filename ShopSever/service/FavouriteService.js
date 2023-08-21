const favouriteModel = require('../model/FavouriteModel');

// Thêm sản phẩm vào danh sách yêu thích
const addToFavourite = async (userId, productId) => {
  try {
    let favourite = await favouriteModel.findOne({ userId });
    
    if (!favourite) {
      // Nếu chưa tồn tại danh sách yêu thích cho userId, tạo mới
      favourite = await favouriteModel.create({ userId, productId: [productId] });
    } else {
      // Nếu đã tồn tại danh sách yêu thích
      if (!favourite.productId) {
        // Nếu mảng productId chưa được khởi tạo, tạo mới và thêm sản phẩm vào
        favourite.productId = [productId];
      } else {
        // Nếu mảng productId đã tồn tại, kiểm tra xem sản phẩm đã tồn tại trong danh sách chưa
        if (!favourite.productId.includes(productId)) {
          // Thêm sản phẩm mới vào mảng nếu chưa tồn tại
          favourite.productId.push(productId);
        }
      }
      // Lưu thay đổi vào cơ sở dữ liệu
      await favourite.save();
    }
    
    return favourite;
  } catch (error) {
    throw error;
  }
};



// Lấy danh sách yêu thích của người dùng với thông tin name, price và image của sản phẩm
const getFavouritesByUserId = async (userId) => {
  try {
    const favourites = await favouriteModel.findOne({ userId })
      .populate({
        path: 'productId',
        select: 'name price image',
        populate: {
          path: 'categoryId',
          select: 'name'
        }
      });
    return favourites;
  } catch (error) {
    throw error;
  }
};


// Xóa sản phẩm khỏi danh sách yêu thích
const removeFromFavourite = async (userId, productId) => {
  try {
    const favourite = await favouriteModel.findOne({ userId });
    
    if (favourite) {
      // Kiểm tra xem sản phẩm có tồn tại trong danh sách yêu thích không
      const productIndex = favourite.productId.findIndex(id => id.toString() === productId);
      if (productIndex !== -1) {
        // Xoá sản phẩm khỏi mảng productIds
        favourite.productId.splice(productIndex, 1);
        await favourite.save();
      }
    }
    
    return { message: 'Product removed from favourites' };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addToFavourite,
  getFavouritesByUserId,
  removeFromFavourite
};
