const fs = require('fs');
const path = require('path');
const {parse} = require('fast-csv');
// import fun from "./Quiz"
const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")


let rows = [];

fs.createReadStream(path.resolve(__dirname, 'Quiz_MCQ.csv'))
  .pipe(parse({ headers: true }))
  .on('error', error => console.error(error))
  .on('data', row => {
    //   console.log(row);
      //each row can be written to db
      rows.push(row);
  })
  .on('end', rowCount => {
      console.log(`Parsed ${rowCount} rows`);
    //   console.log(rows[1].Questions); // this data can be used to write to a db in bulk
  });

// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end(JSON.stringify(rows));
// }).listen(4000);


// npm init
// npm i express cors nodemon
// they add a handy req.body object to our req,
// containing a Javascript
//  object representing the payload sent with the request

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get("/home", cors(), async (req, res) => {
	res.send(JSON.stringify(rows))
})
app.get("/", cors(), async (req, res) => {
	res.send("This is the data for the home page")
})

app.post("/post_name", async (req, res) => {
	let { name } = req.body
	console.log(name)
})
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})