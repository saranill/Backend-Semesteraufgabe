import { PlantService } from '../service/db.sqlqueries.js';

export const Controller = {

    readAll: (req, res) => {
        PlantService.getAll((err, result) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while getting all data",
                });
            else {
                console.log(result);
                let arr = [];
                result.forEach( plant => {
                    let buff = new Buffer(plant.image, 'base64');
                    let text = buff.toString('ascii');
                    plant.image = text;
                    arr.push(plant);
                });
                res.json(arr);
            }
        });
    },

    create: (req, res) => {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!",
            });
        }
        const plant = {...req.body };
        PlantService.create(plant, (err, result) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the post.",
                });
            else res.json(result);
        });
    },
};
