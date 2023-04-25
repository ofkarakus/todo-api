import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

// Set up CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

// CREATE USER
app.post(`/signup`, async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const result = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while processing your request.",
      error,
    });
  }
});

// RETRIEVE USERS
app.get(`/users`, async (req, res) => {
  try {
    const result = await prisma.user.findMany();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while processing your request.",
      error,
    });
  }
});

// CREATE TASK
app.post(`/task`, async (req, res) => {
  const { name, description, dueDate, status, userId } = req.body;

  try {
    const result = await prisma.task.create({
      data: {
        name,
        description,
        dueDate,
        status,
        userId,
      },
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while processing your request.",
      error,
    });
  }
});

// RETRIEVE TASKS
app.post(`/tasks`, async (req, res) => {
  const { userId } = req.body;

  try {
    const result = await prisma.task.findMany({
      where: {
        userId,
      },
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while processing your request.",
      error,
    });
  }
});

// DELETE TASK
app.delete(`/task`, async (req, res) => {
  const { taskId } = req.body;

  try {
    const result = await prisma.task.delete({
      where: {
        id: taskId,
      },
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while processing your request.",
      error,
    });
  }
});

// UPDATE TASK
app.put(`/task`, async (req, res) => {
  const { taskId, name, description, dueDate, status } = req.body;

  try {
    const result = await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        name,
        description,
        dueDate,
        status,
      },
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while processing your request.",
      error,
    });
  }
});

// app.post(`/signin`, async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const result = await prisma.user.findFirstOrThrow({
//       where: {
//         email,
//         password,
//       },
//     });
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({
//       message: "An error occurred while processing your request.",
//       error,
//     });
//   }
// });

app.listen(4000, () =>
  console.log(`
⭐️ Server ready at: http://localhost:4000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
