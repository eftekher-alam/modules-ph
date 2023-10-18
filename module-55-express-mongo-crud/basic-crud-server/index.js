const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || "5000";

// middleware
app.use(cors());
app.use(express.json());

// eftekher
// 77wRRv445a8aX96X


// mongodb start
//connection string
const uri = "mongodb+srv://eftekher:77wRRv445a8aX96X@cluster0.ougk6tn.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const db = client.db("userDB");
        const userCollection = db.collection("users");

        app.get("/users", async (req, res) => {
            const cursor = await userCollection.find();
            console.log(cursor);
            const users = await cursor.toArray();
            res.send(users);
        })

        app.post("/createUser", async (req, res) => {
            const user = req.body;
            const result = await userCollection.insertOne(user) || {};
            res.send(result);
        });

        app.get("/updateUser/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const user = await userCollection.findOne(query);
            res.send(user);
        })

        app.put("/updateUser/:id", async (req, res) => {
            const id = req.params.id;
            const user = req.body;
            const query = { _id: new ObjectId(id) };
            const option = { upsert: true };
            const newUser = {
                $set: {
                    name: user.name,
                    email: user.email
                }
            };
            const result = await userCollection.updateOne(query, newUser, option);
            res.send(result);
        })

        app.delete("/deleteUser/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            // console.log(query);
            const result = await userCollection.deleteOne(query);
            res.send(result);
        })


        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

// mongodb end



app.get("/", (req, res) => {
    res.send({ ok: "ok" });
});


app.listen(port, () => {
    console.log("Server is running on port ", port);
});