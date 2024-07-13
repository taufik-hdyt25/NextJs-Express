const { query } = require('express')
const res = require('express/lib/response')
const conn = require('../configs/db')

module.exports ={
  createProduct: (data) => {
    return new Promise((resolve, reject)=>{
      const query = "INSERT INTO products SET ?"
      conn.query(query, data, (err, result)=>{
        if (!err){
          resolve(result)
        }else(
          reject(err)
        )
      })
    })
  },

  getAllProduct: (dataPerPage, skip, search)=>{
    return new Promise((resolve, reject)=>{
      const query = "SELECT * FROM products WHERE lower(name) like ? or lower(type) like ? LIMIT ?, ?"
      conn.query(query, ['%' + search.toLowerCase() + '%','%' + search.toLowerCase() + '%', skip, dataPerPage], (err, result)=>{
        if (!err){
          resolve(result)
        }else (
          reject(err)
        )
      })
    })
  },

  countProduct: (search)=> {
    return new Promise((resolve, reject)=> {
      const query = "SELECT count(id) as total FROM products WHERE lower(name) like ? or lower(type) like ?"
      conn.query(query, ['%' + search.toLowerCase() + '%','%' + search.toLowerCase() + '%'], (err, result)=> {
        if (!err) {
          resolve(result[0]?.total ?? 0)
        }else (
          reject(err)
        )
      })
    })

  },

  getProductById: (data)=>{
    return new Promise((resolve, reject)=>{
      const query = "SELECT id, name, price, stock, brand, type FROM products where id= ? limit 1"
      conn.query(query, data, (err, result)=> {
        if(!err){
          resolve(result[0])
        }else(
          reject(err)
        )
      })
    })
  },

  updateProduct: (id,name, price, stock, brand, type)=>{
    return new Promise((resolve, reject)=>{
      const query = "UPDATE products SET name = ?, price=?, stock=?, brand=?, type=? WHERE id=?"
      conn.query(query, [name,price,stock,brand,type,id], (err, result)=>{
        if (!err){
          resolve(result)
        }else(
          reject(err)
        )
      })
    })
  },

  deleteProduct: (del)=>{
    return new Promise((resolve, reject)=>{
      const query = "DELETE FROM products WHERE id = ?limit 1"
      conn.query(query, del, (err, result)=>{
        if(!err){
          resolve(result)
        }else(
          reject(err)
        )
      })
    })
  }



}