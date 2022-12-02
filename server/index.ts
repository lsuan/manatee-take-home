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

type StockData = {
  symbol: string;
  currentPrice?: number | undefined;
  percentageChange?: number | undefined;
  time?: number | undefined;
};

app.get("/api/quote", (req: Request, res: Response) => {
  // c -> current price
  // dp -> percentage change

  const symbol = req.query.symbol as string;
  let result: StockData = { symbol: symbol };

  finnhubClient.quote(symbol, (error: any, data: any, response: any) => {
    if (data && data["dp"]) {
      result["currentPrice"] = data["c"];
      result["time"] = Date.now();
      result["percentageChange"] = data["dp"];
      res.json(result);
    } else {
      res.json({ error: `Nothing found for ${symbol}` });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
