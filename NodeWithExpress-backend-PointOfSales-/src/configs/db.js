require("dotenv").config();

// coneksi database
// const mysql = require('mysql')
// const conn = mysql.createConnection({
//   host: "ep-fragrant-bush-09941286.us-east-2.aws.neon.tech",
//   user: "taufik-hdyt",
//   password: "QNp8YA2bSzse",
//   database: "toko-herbal",
//   ssl: true
// })

const postgreSQL = require("postgres");
const conn = postgreSQL({
  host: "ep-fragrant-bush-09941286.us-east-2.aws.neon.tech",
  user: "taufik-hdyt",
  password: "QNp8YA2bSzse",
  database: "toko-herbal",
  ssl: true,
});



// check koneksi jika error
conn((err) => {
  if (err) console.log(`Database Connection Error: ${err}`);
});

module.exports = conn;
