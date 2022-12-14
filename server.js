const express = require("express");
const app = express();
const port = 8081;
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Test:test@devcluster1.okrmoqd.mongodb.net/Webshop-DEV",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({extended: true}));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection.error"));
db.once("open", function (){
    console.log("Verbindung zur Datenbank erfolgreich hergestellt!!")
} );

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

app.use(express.json());

const UserCreateRoute = require("./routes/user_create");
app.use("/userCreate", UserCreateRoute);

const TopsellerRoute = require("./routes/topseller");
app.use("/topseller", TopsellerRoute);

const OwnerRoute = require("./routes/OwnerInterface");
app.use("/owner", OwnerRoute);

const ProductRoute = require("./routes/product");
app.use("/product", ProductRoute);

const ShoppingRoute = require("./routes/shoppingbag");
app.use("/bag", ShoppingRoute);