import { Router } from "express";
import {createtask, deletetask, gettask, updatetask } from "../controllers/task.controller.js";
const router = Router()

router.get('/task', gettask)
router.post('/task', createtask)
router.put('/task/:id', updatetask)
router.delete('/task/:id', deletetask)

export default router