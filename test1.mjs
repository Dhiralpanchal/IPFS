import { create } from 'ipfs-http-client';
import express from 'express';
import mongoose from 'mongoose';
const app = express();
import fs from 'fs';

//create a connection of mongo db
mongoose.connect("mongodb://127.0.0.1/ipfspractical")
    .then(() => console.log("connected with moongoose.."))
    .catch((err) => console.log(err));

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

const filename = "hello.txt";
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
const ipfsdata = new mongoose.model("ipfsdata", ipfsschema);


//localhost port
app.listen(3000, () => {
    try {
        console.log('Listening on port 3000');

    }
    catch (err) {
        console.log(err);
    }

})

//store data
app.post('/addfile', async (req, res) => {
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
})

app.post('/to_pinata',async(req,res)=>{
    try{

         const response = await fetch("")
        
    }
    catch (err){
        console.log(err);
    }
})
