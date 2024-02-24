const db = require("../../database/mysql");

exports.findAll=async ()=>{
const [rows]=await db.query(`
select * from posts join users on posts.user_id=users.id
`) 
console.log(rows);
return rows;
}