const admin = require('firebase-admin');
const OtpService = require('../config/otpstore-e88a9-firebase-adminsdk-v7zs0-3222fab5a0.json');

admin.initializeApp({
    credential: admin.credential.cert(OtpService),
    databaseURL: 'https://otpstore-e88a9-default-rtdb.firebaseio.com',
});

module.exports = admin;