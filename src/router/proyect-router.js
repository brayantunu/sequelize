import { Router } from "express";
import {createproyect,deleteproyect,getproyect, updateproyect} from "../controllers/proyect-controller.js"
const router = Router()

router.get('/proyecto',getproyect)
router.post('/proyect',createproyect)
router.put('/proyect/:id',updateproyect)
router.delete('/proyect/:id',deleteproyect)
router.get('/proyect/:id')

export default router