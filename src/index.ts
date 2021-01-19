import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
const app = express();
const port = 3000;

// create server

app.use((req, res, next) => {
  next();
});

app.listen(port, "localhost", () => {
  return console.log(`server is listening on ${port}`);
});
