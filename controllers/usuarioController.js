const db = require('../config/db');

exports.login = (req,res)=>{

    const {usuario, contrasena} = req.body;

    const sql = `
    SELECT *
    FROM usuario
    WHERE usuario = ?
    AND contrasena = ?
    `;

    db.query(
        sql,
        [usuario, contrasena],
        (err,results)=>{

            if(err){
                return res.status(500).json(err);
            }

            if(results.length > 0){

                res.json({
                    success:true
                });

            }else{

                res.json({
                    success:false
                });
            }
        }
    );
}