import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Beep boop");
});

app.listen(PORT);
