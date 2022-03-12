const cool = require("cool-ascii-faces");
const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res)=>{
    console.log("Requested / route")
    res.send(cool());
});

app.listen(port, ()=>{
    console.log(`Server ready at ${port}`);
});
