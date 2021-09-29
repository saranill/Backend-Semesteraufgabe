import { connection as sql } from '../database/db.connection.js';

export const PlantService = {
    create: async(newPost, result) => {
        sql.query("INSERT INTO plants SET ?", newPost, (err, res) => {
            if (err) result(err, null);
            else result(null, { id: res.plantId, ...newPost });
        });
    },
    getAll: async(result) => {
        sql.query("SELECT * FROM plants", (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        });
    },
};
