const { Router } = require( "express");

const  data = require( '../controllers/main_app.js')

// const data = require("./controllers/main_app")
const routes = Router();
//add new file
routes.post('/addfile',data.add_data);
//upload data
routes.post('/to_pinata',data.upload_data);

module.exports = routes;

