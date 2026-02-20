import express from "express"; //  the main framework. It lets you create a server
import cors from "cors"; //  stands for Cross-Origin Resource Sharing. Without this, your browser would block your React frontend
import bodyParser from "body-parser"; //  when your frontend sends data (like a login form), it arrives as raw text. body-parser translates it into a JavaScript object you can actually use.
import dotenv from "dotenv"; // lets you use a .env file to store secret

// SETTING UP THE APP
dotenv.config(); // reads env
const app = express(); // creates a server
const port = process.env.PORT || 8080;

//  frontend is allowed to talk to your backend:
const corsOptions = {
  origin: process.env.FRONTEND_URL, //  only requests coming from your frontend URL
  credentials: true, //  allows cookies to be sent along with requests (important for keeping users logged in).
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// RUNNING
app.listen(port, () => {
  console.log(`Server is running on http://localhost${port}`);
});
