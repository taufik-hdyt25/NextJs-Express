const res = require('express/lib/response')
const conn = require('../configs/db')



module.exports = {
  getUserById: (id) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT id,name,email FROM users where id = ? limit 1"
      conn.query(query, id, (err, result) => {
        if (!err) {
          resolve(result[0])
        }else (
          reject(err)
        )
      })
    })
  },

  getUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users where email = ?"
      conn.query(query, email, (err, result) => {
        if (!err) {
          resolve(result[0])
        }else (
          reject(err)
        )
      })
    })
  },

  getAllUser: (dataPerPage, skip, search) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE lower(name) like ? or lower(email) like ? LIMIT ?, ?"
      conn.query(query, ['%' + search.toLowerCase() + '%','%' + search.toLowerCase() + '%', skip, dataPerPage], (err, result) => {
        if (!err) {
          resolve(result)
        }else (
          reject(err)
        )
      })
    })
  },

  // menampilkan data per page
  countUser: (search) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT count(id) as total FROM users WHERE lower(name) like ? or lower(email) like ?"    //mencari berdasarkan name & email
      conn.query(query, ['%' + search.toLowerCase() + '%','%' + search.toLowerCase() + '%'], (err, result) => {  //mengubah data urutan dari A - Z
        if (!err) {
          resolve(result[0]?.total ?? 0)
        }else (
          reject(err)
        )
      })
    })
  },

  registerUser: (data) => {                           //daftar user
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO Users SET ?"       //memasukan data ke tabel users
      conn.query(query, data, (err, result) => {
        if (!err) {
          resolve(result)
        }else (
          reject(err)
        )
      })
    })
  },

  deleteUser: (hapus) => {                      //delete users
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM users WHERE id = ?limit 1"   //menghapus dari tabel users berdasarkan id
      conn.query(query, hapus, (err, result) => {
        if (!err) {
          resolve(result)
        }else (
          reject(err)
        )
      })
    })
  },

  updateUser: (id,name,email) => {                                        //meng update data
    return new Promise((resolve, reject) => {
      const query =  "UPDATE users SET name = ?, email=? WHERE id = ?"    // update tabel users (name, email) berdasarkan id
      conn.query(query, [name,email,id], (err, result) => {
        if (!err) {
          resolve(result)
        }else (
          reject(err)
        )
      })
    })
  }


}