import { Router } from "express";
import {
  deleteTask,
  getTask,
  getTasks,
  getTasksCount,
  saveTask,
  updateTask,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/count", getTasksCount);

router.get("/tasks/:id", getTask);

router.post("/tasks", saveTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);

export default router;
