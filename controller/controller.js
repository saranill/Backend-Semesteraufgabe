import { PlantService } from '../service/db.sqlqueries.js';

//prinzipielle Idee des Controllers ist, neben dem Aufruf der jeweiligen Funktion von PlantService den Funktionsaufruf so vorzubereiten, dass die entsprechenden Daten korrekt und vollständig übergeben werden. Außerdem werden die resultate der Datenbank jeweils als JSON zurückgesendet

export const Controller = {

    readAll: (req, res) => {  //ruft die create()-Funktion des PlantService auf. Dazu muss jedoch erst der Datensatz erstellt werden, der in die Datenbank eingefügt werden soll. Dieser Datensatz wird aus dem body des requests extrahiert
        PlantService.getAll((err, result) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while getting all data",
                });
            else res.json(result);
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

    readOne: (req, res) => {
        PlantService.findById(req.params.plantId, (err, result) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while getting one post",
                });
            else res.json(result);
        });
    },

/*    delete: (req, res) => {
        PlantService.remove(req.params.plantId, (err, result) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while delete the post",
                });
            else res.json(result);
        });
    },*/

/*    update: (req, res) => {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!",
            });
        }
        const plant = {...req.body };
        PlantService.updateById(
            req.params.plantId,
            plant,
            (err, result) => {
                if (err)
                    res.status(500).send({
                        message: err.message || "Some error occurred while update the post",
                    });
                else res.json(result);
            }
        );
    },*/
};
