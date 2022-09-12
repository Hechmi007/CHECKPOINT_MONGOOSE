const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'please type your name !!' ]
    },
    age: Number,
    favoriteFoods: [String]
})

module.exports = mongoose.model('User', UserSchema)