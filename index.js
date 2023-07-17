const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const routes = require("./routes");

app.use(express.json());
app.use(routes);


app.get("/", (req, res) => res.send("Welcome to your personal workout tracker!"));

app.listen(port, () => console.log(`App listening on port ${port}!`));