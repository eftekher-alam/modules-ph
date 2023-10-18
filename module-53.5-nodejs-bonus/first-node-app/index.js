const express = require("express");
const data = require("./data.json");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello this is my first node js app ok...");
});

app.get("/login", (req, res) => {
    res.send("You are in the login function..");
});

app.get("/posts", (req, res) => {
    res.send(data);
})

app.get("/post/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const resData = data.find(data => data.id === id);
    res.send(resData)
})

app.listen(port, () => {
    console.log(`first-node-app is running on prot ${port}`);
});