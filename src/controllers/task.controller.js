import { task } from "../models/task.js";


export const gettask = async (req,res) => {
    try{
        // throw new error('query feiled')
        const proyects = await task.findAll()
        console.log(proyects)
        res.json(proyects)
    }
    catch(error)   {
        return res.status(500).json({message:error.message})
    }
    }

    export const createtask = async (req,res) => {
        const { name, done,proyectId} = req.body
        try {
            const newtask = await task.create({
                name,
                done,
                proyectId
            })
            res.json(newtask)
        } catch (error) {
            return res.status(500).json({message:error.message})
        }
    }

    export const updatetask = async (req,res) =>{
        try {
            const { id } = req.params
            const {name,done,proyectId} = req.body
            const Task = await task.findByPk(id)
            Task.name = name
            Task.done = done
            Task.proyectId = proyectId
            await Task.save()
            res.json(Task)
            console.log(id);
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }
    export const deletetask = async (res,req)=>{
        try {
            const {id} = req.params
            await task.destroy({
                where:{
                    id
                }
            });
            
            res.sendStatus(204)
            console.log(id);
        } catch (error) {
            return res.status(500).json({message: error.message})  
        }
    }