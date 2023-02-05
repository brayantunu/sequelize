import  Express  from "express";
const app = Express()
import proyectrouter from "./router/proyect-router.js";
import taskrouter from "./router/task-router.js";
app.use(Express.json());


app.use(proyectrouter)
app.use(taskrouter)
export default app;