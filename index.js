const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
  res.set({
    "Allow-access-Allow-Origin" : '*'
  })
  return res.redirect("index1.html");
});
app.listen(port, () =>{
  console.log(`listening on port ${port}`);
});