// import sequelize
import { Sequelize } from "sequelize";
 
// create connection
const db = new Sequelize('sequelize_db', 'postgres', '1234567', {
    host: 'localhost',
    dialect: 'postgres'
});
 
// export connection
export default db;