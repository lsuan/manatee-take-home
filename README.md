# manatee-take-home
This is a take home coding assessment assigned by Manatee. It takes a stock tinker symbol and returns some data from the finnhub API.

### Built With
- TypeScript
- React
- Node.js
- Express

## How to Run

- Clone the directory and install the dependencies for the server
  - <code>git clone {repo}</code>
  - <code>cd server</code>
  - <code>npm install</code>

- Make a .env file in the **server** directory and define
  - <code>PORT={any number}</code>
  - <code>FINNHUB_TOKEN={your finnhub token}</code>
  - <code>CLIENT_URL=http://localhost:{the port number for your client}</code>

- Open another terminal window and change into the client directory and install dependencies
  - <code>cd ../client</code>
  - <code>cd client</code>
  - <code>npm install</code>

- Make a .env file in the **client** directory and define
  - <code>
      VITE_SERVER_URL=http://localhost:{your chosen server PORT}
    </code>

- Then start the client server by running
  - <code>
      npm run dev
    </code>
