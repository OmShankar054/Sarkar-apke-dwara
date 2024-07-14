import dotenv from 'dotenv';
dotenv.config();

import express from "express";


const index = express()
const path = import("path");


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); //both of these statements are middleware
app.use(express.json());  //to help pass the data
 

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static('./public'));
app.use(express.static ("public"))
app.get("/", (req, res) => {
  res.render("index.ejs");
});



app.get("/dashbord", (req, res) => {
  res.render("dashbord.ejs");
});


app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/camp", ( req, res) =>{
  res.render("camp.ejs");
});

app.post('/dashboard', (req, res) => {
  const { name, email, date, district, panchayat, block } = req.body;
  // Handle registration logic here
  res.send(`Registered: ${name}, ${email}, ${date}, ${district}, ${panchayat}, ${block}`);
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
