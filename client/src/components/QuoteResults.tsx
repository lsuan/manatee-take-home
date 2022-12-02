import StockData from "../utils/stockData";

type QuoteResultsProps = {
  stockData: StockData;
};

const convertToDollars = (price: number) => {
  return `$${price.toFixed(2)}`;
};

const convertToTime = (time: number) => {
  const date = new Date(time);
  const datetime = `${date.toLocaleDateString("en-US", {
    dateStyle: "medium",
  })} ${date.toLocaleTimeString("en-US", { timeStyle: "short" })}`;
  return datetime;
};

const convertToPercentage = (decimal: number) => {
  return `${(decimal * 100).toFixed(2)}%`;
};

function QuoteResults({ stockData }: QuoteResultsProps) {
  return (
    <div className="rounded-lg bg-stone-600 p-4 mt-4">
      <h2 className="text-center font-semibold mb-2">
        {`Stock Quote Data for ${stockData.symbol}`}
      </h2>
      <ul className="rounded-lg bg-stone-500 list-none p-2">
        <li className="flex justify-between mb-1">
          <p className="mr-2">Current Price</p>
          <p>{convertToDollars(stockData.currentPrice)}</p>
        </li>
        <li className="flex justify-between mb-1">
          <p className="mr-2">Time</p>
          <p>{convertToTime(stockData.time)}</p>
        </li>
        <li className="flex justify-between mb-1">
          <p className="mr-2">Prev Closing Price Difference</p>
          <p>{convertToPercentage(stockData.percentageChange)}</p>
        </li>
      </ul>
    </div>
  );
}

export default QuoteResults;
