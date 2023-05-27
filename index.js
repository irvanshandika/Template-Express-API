import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.APP_PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Selamat Datang Di Template API",
  });
});

app.listen(Number(port), () => {
  console.log(`Server up and running at http://localhost:${port}`);
});
