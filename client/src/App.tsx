import { useState } from "react";

function App() {
  const [symbol, setSymbol] = useState<string>();

  return (
    <div className="App bg-stone-900 text-white min-h-screen p-8 flex justify-center items-center">
      <div className="max-w-xl">
        <h1 className="font-semibold text-center text-3xl mb-8">
          Stock Quotes with finnhub API
        </h1>
        <div className="p-8 bg-stone-800 rounded-lg">
          <form className="flex justify-between">
            <div className="flex flex-col w-full mr-2">
              <label className="font-semibold mb-1" htmlFor="stock-symbol">
                Stock Ticker Symbol
              </label>
              <input
                id="stock-symbol"
                className="p-2 rounded-lg bg-stone-600 border border-b-stone-300 w-full"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="rounded-lg font-semibold px-6 py-2 bg-rose-300 text-black hover:bg-rose-200 self-end tracking-wide"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
