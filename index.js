const express = require("express");
// const mongoose = require("mongoose");
// mongoose.connect();

// const Product = mongoose.model('Product', {
//     title : String,
//     price : Number,
//     thumbnail : String,
// })

const app = express();
const PORT = 3001;
const router = require("./routes/client/index.router");

app.set("views", "./views");
app.set("view engine", "pug");

// router client
router(app);
// end router client


// app.get("/", (req, res) => {
//     res.render("client/pages/home/index");
// });
// app.get("/products", (req, res) => {
//     res.render("client/pages/products/index");
// });

app.listen(PORT, (req, res) => {
    console.log(`App running on port :` + PORT);
});