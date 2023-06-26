const  { create } = require( 'ipfs-http-client');
//import express from 'express';
//import mongoose from 'mongoose';
//const app = express();
const fs = require('fs');

const ipfsdata = require( '../models/schema_model.js')

//create a connection of mongo db
/*mongoose.connect("mongodb://127.0.0.1/ipfspractical")
    .then(() => console.log("connected with moongoose.."))
    .catch((err) => console.log(err));*/

//create a connection of ipfs
async function ipfsClient() {
    const ipfs = await create(
        {
            host: "127.0.0.1",
            port: 5001,
            protocol: "http",
        }
    )
    return ipfs
}

const filename = "D:/IPFS/hello.txt";
const file = fs.readFileSync(filename, (err) => {
    console.log(err)
});

async function saveText() {

    let ipfs = await ipfsClient()
    let result = await ipfs.add(file)
    console.log(result)
    return (result.path)
}
//  saveText()
module.exports = {
   add_data : async (req, res) => {
        try {
            const file_data = new ipfsdata({
           file_name: filename,
                hash: await saveText()
            })
            file_data.save();
            res.json(file_data)
    
        }
        catch (err) {
            console.log(err);
        }
    },
    upload_data : async(req,res)=>{
        try{
    
             const response = await fetch("")
            
        }
        catch (err){
            console.log(err);
        }
    }
}    

