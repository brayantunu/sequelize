import { task } from "../models/task.js";


export const gettask = async (req,res) => {
    try{
        // throw new error('query feiled')
        const tasks = await task.findAll()
        // console.log(proyects)
        // res.json(proyects)
        res.status(200).json({message:'listando todas las tareas exitosamente', tasks})
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
            // res.json(newtask)
            res.status(200).json({message: 'creacion de las tareas exitosamente',newtask})
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
            // res.json(Task)
            // console.log(id);
            res.status(200).json({message: 'actualizado exitosamente la tarea co  projecto',Task})
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }
    export const deletetask = async (req,res)=>{
       
            // const itemId = req.params.id;
            // const condition = req.query.condition;
          
            // if (!condition) {
            //     const deleted = true;
            //     if (deleted) {
            //       return res.send({ id: itemId, message: 'Elemento eliminado exitosamente' });
            //     } else {
            //       return res.status(400).send({ error: 'No se pudo eliminar el elemento' });
            //     }
            // }
        try {
            const {id} = req.params
                await task.destroy({
                    where:{
                        id
                    }
            });           
            res.status(200).json({message: 'eliminado exitosamente la tarea co  projecto',})
            // res.sendStatus(204)
            // console.log(id);
            // res.status(200).json({message: 'elimacion exitosamente',task}
        } catch (error) {
            return res.status(500).json({message: error.message}) 
        }
        }