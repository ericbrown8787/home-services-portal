import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/api/", (req, res) => {
  res.send("Beep boop");
});

app.listen(PORT);
