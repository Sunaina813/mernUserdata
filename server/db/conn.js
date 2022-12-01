const mysql = require("mysql2");

const conn = mysql.createConnection({
  user: "root",
  host: "localhost",
  port:8003,
  password: "",
  database:"userdata",
});
console.log("it is running ");

conn.connect((error) => {
  if (error) throw error;
  console.log("connected !");
});
