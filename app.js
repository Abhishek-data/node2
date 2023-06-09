const path = require('path')
const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactusRoutes = require("./routes/contactUs");
const successRoutes = require("./routes/success");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use('/admin', contactusRoutes);
app.use('/admin', successRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000);
