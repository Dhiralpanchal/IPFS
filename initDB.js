const mongoose = require('mongoose');

module.exports = () =>{
mongoose.connect("mongodb://127.0.0.1/ipfspractical")
    .then(() => console.log("connected with moongoose.."))
    .catch((err) => console.log(err));}