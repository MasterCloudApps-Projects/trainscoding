import express from "express";
import helloWorldRouter from "./routes/helloWorld";

function init(services) {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/api/hi", helloWorldRouter.init(services));

  return app;
}

export default init;
