require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();
const port = process.env.PORT || 4000;
const routes = require("./routes/index.js");

app.use(cors())

app.use(express.json());
app.use(routes);


app.get("/abc", (req, res) => res.send("Welcome to your personal workout tracker!"));

app.listen(port, () => console.log(`App listening on port ${port}!`));