import { connection as sql } from '../database/db.connection.js';

export const PlantService = {
    create: async(newPost, result) => {
        sql.query("INSERT INTO posts SET ?", newPost, (err, res) => {
            if (err) result(err, null);
            else result(null, { id: res.plantId, ...newPost });
        });
    },
    getAll: async(result) => {
        sql.query("SELECT * FROM posts", (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        });
    },
    findById: async(postId, result) => {
        sql.query(
            `SELECT * FROM posts WHERE id = ?`, [postId],
            (err, res) => {
                if (err) result(err, null);
                else if (res.length) result(null, res[0]);
                else result({ message: "post not found" }, null);
            }
        );
    },
/*    updateById: async(id, post, result) => {
        sql.query(
            "UPDATE posts SET ? where id= ?", [post, id],
            (err, res) => {
                if (err) result(null, err);
                else if (res.affectedRows == 0) result({ message: "post not found" }, null);
                else result(null, { id: id, ...post });
            }
        );
    },*/
/*    remove: async(id, result) => {
        sql.query("DELETE FROM posts WHERE id = ?", id, (err, res) => {
            if (err) result(null, err);
            else if (res.affectedRows == 0) result({ message: "post not found" }, null);
            else result(null, res);
        });
    },*/
/*    removeAll: async(result) => {
        sql.query("DELETE FROM posts", (err, res) => {
            if (err) result(null, err);
            else result(null, res);
        });
    },*/
};
