import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hi nut");
});

app.listen(port, () => {
  console.log(`Server runing at http://localhost:${port}`);
});
