import React from "react";
import StockData from "../utils/stockData";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

type FormProps = {
  symbol: string;
  setSymbol: (val: string) => void;
  setError: (val: string) => void;
  setStockData: (val: StockData | undefined) => void;
  setIsLoading: (val: boolean) => void;
};

function Form({
  symbol,
  setSymbol,
  setError,
  setStockData,
  setIsLoading,
}: FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStockData(undefined);
    setError("");
    setIsLoading(true);

    fetch(`${SERVER_URL}/api/quote?symbol=${symbol.toUpperCase()}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.hasOwnProperty("error")) {
          setError(data["error"]);
        } else return setStockData(data);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };
  return (
    <form className="flex justify-between" onSubmit={handleSubmit}>
      <div className="flex flex-col w-full mr-2">
        <label className="font-semibold mb-1" htmlFor="stock-symbol">
          Stock Ticker Symbol
        </label>
        <input
          id="stock-symbol"
          className="p-2 rounded-lg bg-stone-600 border border-b-stone-300 w-full placeholder:text-gray-300"
          placeholder="ex. AAPL, TSLA, AMZN"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="rounded-lg font-semibold px-4 py-2 bg-rose-300 text-black hover:bg-rose-200 self-end tracking-wide disabled:bg-rose-50"
        disabled={symbol === "" || symbol === undefined}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
