import {Sequelize} from "sequelize";
 
const db = new Sequelize('mhs_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;