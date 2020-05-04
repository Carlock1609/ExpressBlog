const mongoose = require('../../index');

const userSchema = new mongoose.Schema({
        username: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: mongoose.SchemaTypes.String,
            unique: true,
            select: false,
        }
    },
    {
        timestamp: true,
    },
);

module.exports = mongoose.model('User', userSchema);


