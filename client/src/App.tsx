import { useState } from "react";
import Form from "./components/Form";
import QuoteResults from "./components/QuoteResults";
import StockData from "./utils/stockData";

function App() {
  const [symbol, setSymbol] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [stockData, setStockData] = useState<StockData | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="App bg-stone-900 text-white min-h-screen p-8 flex flex-col justify-center items-center">
      <h1 className="font-semibold text-center text-3xl mb-8">
        Stock Quotes with finnhub API
      </h1>
      <div className="p-6 sm:p-8 bg-stone-800 rounded-lg max-w-xl w-full">
        <Form
          symbol={symbol}
          setSymbol={setSymbol}
          setError={setError}
          setStockData={setStockData}
          setIsLoading={setIsLoading}
        />
        {isLoading && (
          <h2 className="animate-pulse font-semibold text-center mt-4">
            Fetching data...
          </h2>
        )}
        {stockData && Object.keys(stockData).length > 1 && (
          <QuoteResults stockData={stockData} />
        )}
        {error && (
          <h2 className="font-semibold text-center mt-4 text-rose-300">
            {error}
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
