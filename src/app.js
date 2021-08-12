import express from "express";
import taskRoutes from "./routes/tasks.route";
const app = express();

app.use(express.json())
app.use(taskRoutes)

export default app
