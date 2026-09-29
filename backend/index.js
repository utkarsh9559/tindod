const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to TinDog Backend");
});

app.post("/signup", (req, res) => {

    console.log(req.body);

    res.send("Signup API Working");
      
});

app.listen(3000, () => {
    console.log("🚀 Server Started");
});
