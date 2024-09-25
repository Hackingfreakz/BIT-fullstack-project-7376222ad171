require("dotenv").config();
const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client();
const app = express();
const cors = require("cors");
const PORT = 8080;
const connectToDatabase = require('./db/Connection');
async function main() {
    const db = await connectToDatabase();
    await db.client.close();
}

main().catch(console.error);
app.post("/google-auth", async (req, res) => {
    const { credential, client_id } = req.body;
    try {
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: client_id,
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        res.status(200).json({ payload });
    } catch (err) {
        res.status(400).json({ err });
    }
});
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,DELETE,PUT",
    credentials: true
}));
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json("server started")
});
app.get("/login", (req, res) => {
    res.status(200).json("hsdgajgdshgasdjgasjgfashgdafd");
})
app.listen(PORT, () => {
    console.log('server is running at port %d', PORT)
})