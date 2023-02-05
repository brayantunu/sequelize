import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { task } from "./task.js";

export const proyect = sequelize.define('proyect',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING
    },
    priority:{
        type:DataTypes.INTEGER
    },
    description:{
        type:DataTypes.STRING
    },
    estado:{
        type:DataTypes.BOOLEAN
    }
},
{
timestamps:false
}
);


proyect.hasMany(task,{
    foreingKey:'proyecid',
    sourceKey:'id'
})

task.belongsTo(proyect,{
    foreingKey:'proyecid',
    targetId:'id'
})