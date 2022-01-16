const express = require("express");
const bodyParser = require("body-parser");
const {getNFTObject, getAllNftObjects} = require("./controller/NftData");
const {writeData} = require("./controller/DataManager");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    getAllNftObjects()
        .then((result) => writeData("nftObjects", result))
        .then((result) => res.json(result));
});

app.listen(3000, () => console.log("Server is up"));