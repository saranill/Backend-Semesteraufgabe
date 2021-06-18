import { PlantService } from '../service/db.sqlqueries.js';

//prinzipielle Idee des Controllers ist, neben dem Aufruf der jeweiligen Funktion von PlantService den Funktionsaufruf so vorzubereiten, dass die entsprechenden Daten korrekt und vollständig übergeben werden. Außerdem werden die resultate der Datenbank jeweils als JSON zurückgesendet

export const Controller = {

    readAll: (req, res) => {  //ruft die create()-Funktion des PlantService auf. Dazu muss jedoch erst der Datensatz erstellt werden, der in die Datenbank eingefügt werden soll. Dieser Datensatz wird aus dem body des requests extrahiert
        PlantService.getAll((err, result) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while getting all posts",
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
        const post = {...req.body };
        PlantService.create(post, (err, result) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the post.",
                });
            else res.json(result);
        });
    },

/*    delete: (req, res) => {
        PostService.remove(req.params.postId, (err, result) => {
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
        const post = {...req.body };
        PostService.updateById(
            req.params.postId,
            post,
            (err, result) => {
                if (err)
                    res.status(500).send({
                        message: err.message || "Some error occurred while update the post",
                    });
                else res.json(result);
            }
        );
    },*/

/*    readOne: (req, res) => {
        PostService.findById(req.params.postId, (err, result) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while getting one post",
                });
            else res.json(result);
        });
    },*/
};
