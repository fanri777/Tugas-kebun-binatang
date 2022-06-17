// Import model zoo
import Zoo from "../models/Zoo.js";

import db from "../config/database.js";
 
// Get semua zoo
export const getZoo = async (req, res) => {
    try {
        const zoo = await Zoo.findAll();
        res.send(zoo);
    } catch (err) {
        console.log(err);
    }
}
 
// Get zoo berdasarkan id
export const getZooById = async (req, res) => {
    try {
        const zoo = await Zoo.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(zoo[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create zoo baru
export const createZoo = async (req, res) => {
    try {
        const result = await Zoo.create(req.body);
        res.json({
            "message": "Zoo Created",
            "result": result
        });
    } catch (err) { 
        console.log(err);
        return res.json(err.message)
    }
}
 
// Update zoo berdasarkan id
export const updateZoo = async (req, res) => {
    try {
        await Zoo.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Zoo Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete zoo berdasarkan id
export const deleteZoo = async (req, res) => {
    try {
        await Zoo.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Zoo Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}


// Get zoo berdasarkan nama_hewan
export const getZooByNamaHewan = async (req, res) => {
    try {
        const result = await Zoo.findOne({
            where: {
            nama_hewan: req.params.nama_hewan
            }
        });

        if (!result) {
            res.json( { message: "Nama hewan tidak ditemukan" } );
        } 

        res.send(result);
    } catch (err) {
        console.log(err);
    }
}

// count zoo berdasarkan jenis_hewan
export const getZooByJenisHewan = async (req, res) => {
    try {
        const result = await Zoo.count({
            where: {
            jenis_hewan: req.params.jenis_hewan
            }
        });

        if (!result) {
            res.json( { message: "jenis hewan tidak ditemukan" } );
        } 

        res.json({"jumlah_hewan": result,
        "jenis_hewan": req.params.jenis_hewan
        });

    } catch (err) {
        console.log(err);
    }
}


// Get all zoo berdasarkan jenis_hewan
export const getJenisHewan = async (req, res) => {
    try {

        const result = await db.sequelize.query('select distinct(jenis_hewan) as `jenis_hewan`' ,{
            nest: true,
            type: db.sequelize.QueryTypes.SELECT
          });

        

        if (!result) {
            res.json( { message: "Nama hewan tidak ditemukan" } );
        } 

        res.send(result);
    } catch (err) {
        console.log(err);
    }
}