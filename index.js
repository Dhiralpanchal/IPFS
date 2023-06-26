const express = require( 'express');
// Initialize DB
 require('./initDB.js')();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const file_routes = require('./routes/routes_file.js')


app.use('/data',file_routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT + '...');
});     