const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());

app.get("/generate-link", (req, res) => {
  const id = uuidv4();
  res.send(`https://jade-sopapillas-a82572.netlify.app/?id=${id}`);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
