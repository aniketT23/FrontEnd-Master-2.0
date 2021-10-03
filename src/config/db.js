const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        `mongodb+srv://aniket:aniket_123@cluster0.lvpjs.mongodb.net/test?retryWrites=true&w=majority`
    );
};

module.exports = connect;