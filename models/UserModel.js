import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const User = db.define('users',{
    nama: DataTypes.STRING,
    nim: DataTypes.STRING,
    alamat: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING
},{
    freezeTableName:true
});
 
export default User;
 
(async()=>{
    await db.sync();
})();