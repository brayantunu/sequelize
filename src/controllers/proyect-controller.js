import { proyect } from "../models/proyect.js"
// const estructuraApi = require('../helper/estructura-api,js')

export const getproyect = async (req,res) => {
try{
    // throw new error('query feiled')
    const proyects = await proyect.findAll()
    console.log(proyects)
    res.json(proyects)
}
catch(error)   {
    return res.status(500).json({message:error.message})
}
}

export const createproyect = async (req,res) => {

    const { name,priority,description,estado} = req.body
       try {
        const newproyect = await proyect.create({
            name,
            description,
            priority,
            estado,
        })
        res.json(newproyect)
        api.setEstado("success", "success", "se ah creado exitosamente la especie")
       } catch (error) {
        return res.status(500).json({message:error.message})
       }
    
}

export const updateproyect = async (req,res) => {
  try {
    const { id } = req.params;
    const {name,priority,description} = req.body

    const Proyect = await proyect.findByPk(id);
    Proyect.name = name;
    Proyect.priority = priority;
    Proyect.description = description;
    await Proyect.save();


    res.json(Proyect)
    console.log(id)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}


export const deleteproyect = async(req,res) => {
    try {
        const {id} = req.params;
    await proyect.destroy({
        where:{
            id, 
         
        },

    });

    res.sendStatus(204)
    api.setEstado("success", "success", "se ah creado exitosamente la especie")
    // res.json("eliminado")
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
