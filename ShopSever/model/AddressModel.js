const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AddressSchema = new Schema(
    {
        userId: { type: ObjectId, ref: 'user' },
        address: [
            {  
                addressId: { type: ObjectId, ref: 'address' },
                fullName: { type: String, required: true },
                phoneNumber: { type: String, required: true },
                addressLine1: { type: String, required: true },
                addressLine2: { type: String, required: true },
                addressLine3: { type: String, required: true },
                addressLine4: { type: String, required: true },
            },
          ],

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('address', AddressSchema);