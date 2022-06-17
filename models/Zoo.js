// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Zoo = db.define('zoo', {
  // Define attributes
  nama_hewan: {
    type: DataTypes.STRING
  },
  jenis_hewan: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Zoo
export default Zoo;