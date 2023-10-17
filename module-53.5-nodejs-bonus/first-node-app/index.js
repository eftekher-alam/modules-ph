const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello this is my first node js app...");
});

app.get("/login", (req, res) => {
    res.send("You are in the login function..");
});

app.listen(port, () => {
    console.log(`first-node-app is running on prot ${port}`);
});