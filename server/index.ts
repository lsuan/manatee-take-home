import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
const finnhub = require("finnhub");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_TOKEN;
const finnhubClient = new finnhub.DefaultApi();

app.get("/api/quote", (req: Request, res: Response) => {
  console.log(finnhubClient);
  res.send("connected");
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
