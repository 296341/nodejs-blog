const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String,
        required: "L'email est requis",
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'restricted'],
        required: "le role est requis"
    }
});

module.exports = mongoose.model('User', userSchema);