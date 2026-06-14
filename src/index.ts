import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/api/v1/todos", (req: Request, res: Response) => {
  const dummyTodos = [
    {
      id: 1,
      title: "Buy groceries",
      description: "Buy groceries for the week",
      completed: false,
    },

    {
      id: 2,
      title: "Buy groceries",
      description: "Buy groceries for the week",
      completed: false,
    },
  ];

  res.json({ message: "Todos fetched successfully", data: dummyTodos });
});

if (process.env.NODE_ENV === "development") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
