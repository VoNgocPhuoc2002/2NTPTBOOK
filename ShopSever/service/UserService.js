
const UserModel = require('../model/UserModel');
const bcrypt = require('bcryptjs');;
const jwt = require('jsonwebtoken');

const login = async (email, password) => {
    //1. tìm user theo email: Select email, password, name, id form ursers where email = email and password = password
    //2. So sánh password
    //3. Trả về user nếu đúng, null nếu sai
    const user = await UserModel.findOne({ email });
    // kiểm tra password đã má hóa 
    if (user && bcrypt.compareSync(password, user.password)) {
        return user;
    }
    return null;
}
// const loginGoogle = async (id, email, name, photo, idToken) => {
//     //1. tạo user mới'
//     //2. Lưu user mới
//     //3. Trả về user mới
//     const user = new UserModel({ id, email, name, photo, idToken });
//     await user.save();
//     return user;
// }

const register = async ( email, password) => {
    //1. tạo user mới'
    //2. Lưu user mới
    //3. Trả về user mới
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = new UserModel({ email, password: hash });
    await user.save();
    return user;
}

const uploadAvatar = async (userId, file) => {
    //1. Tìm user theo id
    //2. Upload file lên cloudinary
    //3. Cập nhật lại avatar cho user
    //4. Trả về user
    const user = await UserModel.findById(userId);
    const result = await uploadToCloudinary(file.path);
    user.avatar = result.url;
    await user.save();
    return user;
};

    const update = async (id,  name, dateofbirth, country, mobile, gender) => {
        // const user = await UserModel.findById(id);
        const model = await UserModel.findByIdAndUpdate(id, { name, dateofbirth, country, mobile, gender });
         return model;
    };

const deleteByUser = async (id) => {
    try {
        const user = await UserModel.findByIdAndDelete(id);
        return user;
    } catch (error) {
        console.log(error);
    }
};

// Quên mật khẩu băng OTP gửi về email
const forgotPassword = async (email) => {
    // 1. Tìm user theo email
    // 2. Nếu tìm thấy user thì tạo token mới
    // 3. Cập nhật token mới cho user
    // 4. Trả về user có token
    const user = await UserModel.findOne({ email });
    if (user) {
        const token = jwt.sign({ id: user._id }, 'shhhhh', { expiresIn: 5 * 60 });// 5 phút
        user.resetPassword = token;
        await user.save();
        console.log("🚀 ~ file: UserService.js:127 ~ forgotPassword ~ token", token)
        return token;
    }
    console.log("🚀 ~ file: UserService.js:130 ~ forgotPassword ~ user", user)
    return null;
};


//Quên mật khẩu bằng OTP gửi về sms
const forgotPasswordSMS = async (mobile) => {
    const user = await UserModel.findOne({ mobile });
    if (user) {
        const token = jwt.sign({ id: user._id }, 'shhhhh', { expiresIn: 5 * 60 });// 5 phút
        user.resetPassword = token;
        await user.save();
        console.log("🚀 ~ file: UserService.js:127 ~ forgotPassword ~ token", token)
        return token;
    }
    console.log("🚀 ~ file: UserService.js:130 ~ forgotPassword ~ user", user)
    return null;
};

const get = async (id,   name, dateofbirth, country, mobile, gender) => {
    try {
        const user = await UserModel.findById(id,  name, dateofbirth, country, mobile, gender);
        return user;
    }
    catch (error) {
        console.log(error);
    }
};

// Kiểm tra mã OTP
const checkOTP = async (token, otp) => {
    // 1. Tìm user theo token
    // 2. Nếu tìm thấy user thì kiểm tra mã OTP có khớp với mã OTP trong token hay không
    // 3. Nếu khớp thì trả về user, nếu không khớp thì trả về null
    const user = await UserModel.findOne({ resetPassword: token });
    if (user && user.resetPassword === token) {
        const decoded = jwt.verify(token, 'shhhhh');
        if (decoded.otp === otp) { // Kiểm tra mã OTP có khớp với mã OTP trong token hay không
            return user;
        }
    }
    console.log("🚀 ~ file: UserService.js:162 ~ checkOTP ~ user", user)
    return null;
}

const resetPassword = async (token, password) => {
    const user = await UserModel.findOne({ resetPassword: token });
    if (user && user.resetPassword === token) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        user.password = hash;
        user.resetPassword = null;
        await user.save();
        return user;
    }
    return null;
};



module.exports =
{
    login, register,
    uploadAvatar, deleteByUser,
    update, forgotPassword,
    get, resetPassword, checkOTP, forgotPasswordSMS
};
