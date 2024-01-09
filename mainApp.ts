import { Application, Request, Response } from "express";

export const mainApp = (app: Application) => {
  try {
    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          message: "welcome to our todo",
        });
      } catch (error) {}
    });
  } catch (error) {
    console.log("Error in setting up the routes");
  }
};
