const UserService = require('../service/UserService');
const mailer = require('nodemailer');

const register = async (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[A-Za-z0-9]+$/;

    if (!emailRegex.test(email)) {
        throw new Error('Email không hợp lệ');
    }
    if (!passwordRegex.test(password)) {
        throw new Error('Mật khẩu không hợp lệ');
    }
    const user = await UserService.register( email, password);
    return user;

};



const uploadAvatar = async (userId, file) => {
    const result = await UserService.uploadAvatar(userId, file);
    return result;
};

const login = async (email, password) => {
    const user = await UserService.login(email, password);
    console.log("🚀 ~ file: UserController.js:80 ~ login ~ user", user)
    return user;
};


const deleteByUser = async (id) => {
    const user = await UserService.deleteByUser(id);
    return user;
};

const update = async (id, name, dateofbirth, country, mobile, gender) => {
    try {
        const user = await UserService.update(id,name, dateofbirth, country, mobile, gender);
        return user;
    } catch (error) {
        console.log(error);
    }
}

const get = async (id,  name, dateofbirth, country, mobile, gender) => {
    try {
        const user = await UserService.get(id, name, dateofbirth, country, mobile, gender);
        return user;
    } catch (error) {
        console.log(error);
    }
};

// Gửi mail
const transporter = mailer.createTransport({
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.SEND_MAIL,
        pass: process.env.SEND_MAIL_PASSWORD,
    },
});

// Sinh mã OTP
const generateOTP = () => {
    const otp = Math.floor(1000 + Math.random() * 9000); // Sinh số ngẫu nhiên từ 1000 đến 9999
    return otp.toString();
};
// Gửi mã OTP
const forgotPassword = async (email) => {
    const token = await UserService.forgotPassword(email);
    const otp = generateOTP();
    const mailOptions = {
        from: process.env.SEND_MAIL,
        to: email,
        subject: 'OTP to reset password',
        html: `<p>Your OTP to reset password is <b>${otp}</b></p>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        console.log(`OTP sent: ${info.response}`);
    });
    return token;
};

// Gửi mã OTP qua SMS
const forgotPasswordSMS = async (mobile) => {
    const token = await UserService.forgotPasswordSMS(mobile);
    console.log("🚀 ~ file: UserController.js:161 ~ forgotPasswordSMS ~ token", token)
    return token;
};

// Kiểm tra mã OTP
const checkOTP = async (token, otp) => {
    const user = await UserService.checkOTP(token, otp);
    return user;
};

const resetPassword = async (token, password, confirm_password) => {
    if (password !== confirm_password) {
        throw new Error('Mật khẩu và xác nhận mật khẩu không khớp');
    }
    const user = await UserService.resetPassword(token, password);
    return user;
};



module.exports =
{
    register, login,
    uploadAvatar, update, get,
    forgotPassword, deleteByUser,
    checkOTP, resetPassword, forgotPasswordSMS
};


