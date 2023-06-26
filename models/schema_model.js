const mongoose = require('mongoose');

const ipfsschema = new mongoose.Schema(
    {
        file_name: {
            type: String,
            require: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        hash: {
            type: String,
            require: true
        }
    }
)

//create collection
module.exports = mongoose.model("ipfsdata", ipfsschema);

