import { proyect } from "../models/proyect.js"
// import estructuraApi from "../helper/estructura-api.js"


export const getproyect = async (req,res) => {
try{
    // throw new error('query feiled')
    const proyects = await proyect.findAll()
    // console.log(proyects)
    // res.json(proyects)
    res.status(200).json({succes:true,
    message:'lista de elementos obtenida exitosamente',proyects})
}
catch(error)   {
    return res.status(500).json({message:error.message})
}
}

export const createproyect = async (req,res) => {

    const { name,priority,description,estado} = req.body
       try {
        const { id } = req.params
        const newproyect = await proyect.create({
            name,
            description,
            priority,
            estado,
        })
        // res.json(newproyect)
        res.status(200).json({message: 'recurso creador con exito',newproyect:{
            id:newproyect.id,
            name:newproyect.name
        }})

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



    res.status(201).json({message: 'se ha actualizado el proyecto',
    data:Proyect
})
    
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

    // res.sendStatus(204)
    // api.setEstado("success", "success", "se ah creado exitosamente la especie")
    // res.json("eliminado")
    res.status(200).json({message:'projecto eliminado correctamente',id})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
