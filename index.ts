import express, { Application } from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConfig } from "./utils/dbConfig";
import { mainApp } from "./mainApp";

config();

const port: number = parseInt(process.env.PORT!);

const app: Application = express();

app.use(express.json());
app.use(cors());

mainApp(app);

const server = app.listen(port, () => {
  console.log("database connected...!!!");
  console.clear();

  dbConfig();
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException", error);

  process.exit(1);
});
process.on("unhandledRejection", (reason: any) => {
  console.log("uncaughtException", reason);

  server.close(() => {
    process.exit(1);
  });
});
