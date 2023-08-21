var express = require("express");
var router = express.Router();
var UserController = require("../controller/UserController");
var jwt = require("jsonwebtoken");
var authen = require("../middleware/authen");
const moment = require('moment-timezone');
const { upload, uploadToCloudinary } = require('../middleware/CloudinaryUpload')

/* GET users listing. */
/* http://localhost:3000/api/users/register */
router.post("/users/register", async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await UserController.register( email, password);
    console.log("🚀 ~ file: users.js:14 ~ user:", user)
    res.status(200).json({ user });
  } catch (error) {
    res.status(414).json({ error: error.message });
    console.log(error);
    next(error)
  }
});

/* http://localhost:3000/api/users/login */
router.post('/users/login', async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await UserController.login(email, password);
    if (user) {
      const token = jwt.sign({ user }, 'shhhhh', { expiresIn: 60 * 60 });
      res.status(200).json({ token, user });
      console.log("🚀 ~ file: users.js:31 ~ user:", user)
    } else {
      res.status(200).json({ error: 'Sai email hoặc mật khẩu' });
      console.log("Tài khoản hoặc mật khẩu không trùng khớp")

    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});




/*  http://localhost:3000/users/cpanel/login  */
router.get("/cpanel/login", async function (req, res, next) {
  res.render("admin/login");
});


router.post("/cpanel/login", async function (req, res, next) {
try {
  const { email, password } = req.body;
  if (email == 'admin' && password == '123') {
    res.render('admin/Menu');
  } else {
    throw new Error("Sai email hoặc mật khẩu");
  } 
} catch (error) {
  console.log(error);
  next(error);
}
});





//lấy thông tin user ra để làm quên mật khẩu
/* http://localhost:3000/api/users/:userId */
router.get("/users/:userId", async function (req, res, next) {
  try {
    const { userId } = req.params;
    const user = await UserController.get(userId);
    console.log("🚀 ~ file: users.js:31 ~ user:", user)
    res.status(200).json({ user });
  } catch (error) {
    res.status(414).json({ error: error.message });
    console.log(error);
    next(error);
  }
})

/* Xóa tài khoản của user */
/* http://localhost:3000/api/users/deleteuser/:id */
router.delete("/users/deleteuser/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const user = await UserController.deleteByUser(id);
    console.log("🚀 ~ file: users.js:49 ~ user:", user)
    res.status(200).json({ user });
  } catch (error) {
    res.status(414).json({ error: error.message });
    console.log(error);
    next(error);
  }
});

/* http://localhost:3000/api/users/api-token */
router.get("/users/token", [authen], function (req, res, next) {
  console.log(req.user);
  res.json({ message: "ok" });
});



/* http://localhost:3000/api/users/refresh-token */
router.post("/users/refresh-token", async function (req, res, next) {
  try {
    let { refresh_token } = req.body;
    const data = jwt.verify(refresh_token, 'shhhhh');
    const access_token = jwt.sign({ user: data.user }, 'shhhhh', { expiresIn: 4 * 60 });
    refresh_token = jwt.sign({ user: data.user }, 'shhhhh', { expiresIn: 90 * 24 * 60 * 60 });
    console.log(data);
    res.status(200).json({ user: data.user, access_token, refresh_token });
  } catch (error) {
    res.status(414).json({ error: error.message });
  }
});

/*  http://localhost:3000/api/cpanel/signin  */
router.get("/cpanel/signin", async function (req, res, next) {
  res.render("web/signin");
});

/* http://localhost:3000/api/cpanel/signin */
router.post("/cpanel/signin", async function (req, res, next) {
  try {
    const { email, password } = req.body;
    if (email == 'admin' && password == '123') {
      //  res.render("http://localhost:3000/product/cpanel/index");
    } else {
    console.log("Đăng nhập thất bbaij");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});


//http://localhost:3000/api/users/:userId/updateProfile
router.get("/users/:id/updateProfile", async function (req, res, next) {
  try {
    const { id } = req.params;
    const users = await UserController.get(id);
    console.log("🚀 ~ file: users.js:87 ~ users:", users)
    res.status(200).json({ users });
    console.log(users);
  } catch (error) {
    res.status(414).json({ error: error.message });
    console.log(error);
    next(error);
  }
});
router.get('/users/getAllUser', UserController.getAllUser);


router.get("/users/:id/updateProfile", async function (req, res, next) {
  try {
    const { id } = req.params;
    const users = await UserController.get(id);
    console.log("🚀 ~ file: users.js:87 ~ users:", users)
    res.status(200).json({ users });
    console.log(users);
  } catch (error) {
    res.status(414).json({ error: error.message });
    console.log(error);
    next(error);
  }
});


//http://localhost:3000/api/users/:userId/updateEditProfile
router.post("/users/:id/updateEditProfile", async function (req, res, next) {
  try {
    const { name, dateofbirth, country, mobile, gender } = req.body;
    const { id } = req.params;
    const user = await UserController.update(id, name, dateofbirth, country, mobile, gender);
    console.log(user);update
    res.status(200).json({ user });
  } catch (error) {
    res.status(414).json({ error: error.message });
    console.log(error);
    next(error);
  }
});

/*http://localhost:3000/api/users/forgot-password */
router.post('/users/forgot-password', async function (req, res, next) {
  try {
    const { email } = req.body;
    await UserController.forgotPassword(email);
    res.status(200).json({ status: 'ok', message: 'Vui lòng kiểm tra email để lấy mã OTP' });
    console.log("🚀 ~ file: users.js:118 ~ email:", email)
  } catch (error) {
    res.status(414).json({ error: error.message });
  }
});

/*http://localhost:3000/api/users/forgot-passwordsms */
router.post('/users/forgot-passwordsms', async function (req, res, next) {
  try {
    const { mobile } = req.body;
    await UserController.forgotPasswordSMS(mobile);
    res.status(200).json({ status: 'ok', mobile });
    console.log("🚀 ~ file: users.js:118 ~ email:", mobile)
  } catch (error) {
    console.log(error);
    res.status(414).json({ error: error.message });
  }
});

/*http://localhost:3000/api/users/check-otp */
router.post('/users/check-otp', async function (req, res, next) {
  try {
    const { token, otp } = req.body;
    const user = await UserController.checkOTP(token, otp);
    res.status(200).json({ user });
    console.log("🚀 ~ file: users.js:131 ~ user:", user)
  } catch (error) {
    res.status(414).json({ error: error.message });
  }
})


//http://localhost:3000/api/users/reset-password
router.post('/users/reset-password', async function (req, res, next) {
  try {
    const { token, password, confirm_password } = req.body;
    const result = await UserController.resetPassword(token, password, confirm_password);
    res.status(200).json({ result });
    console.log("🚀 ~ file: users.js:141 ~ result:", result)
  } catch (error) {
    res.status(414).json({ error: error.message });
  }
});




module.exports = router;
