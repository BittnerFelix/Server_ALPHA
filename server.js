const express = require("express");
const app = express();
const port = 5000;

const mongoose = require('mongoose');

//mongoose.connect("mongodb+srv://Test:test@devcluster1.okrmoqd.mongodb.net/Webshop-DEV?retryWrites=true&w=majority",
mongoose.connect("mongodb://localhost:27017/Webshop-Test",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection.error"));
db.once("open", function (){
    console.log("Hurra we are connected")
} );

app.listen(port, () => {
    console.log('Server is running ' + port);
});
app.get("/homepage", (req, res) => {
    res.send("Yay!!");
});

app.use(express.json());

const UserCreateRoute = require("./routes/user_create");
app.use("/userCreateTask", UserCreateRoute);