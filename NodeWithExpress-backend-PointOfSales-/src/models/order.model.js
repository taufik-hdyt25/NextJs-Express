const { query } = require('express')
const res = require('express/lib/response')
const conn = require('../configs/db')

module.exports ={
  Order: (data) => {
    return new Promise((resolve, reject)=>{
      const query = "INSERT INTO orders SET ?"
      conn.query(query, data, (err, result)=>{
        if (!err){
          resolve(result)
        }else(
          reject(err)
        )
      })
    })
  },

  saveOrderDetail: (data) => {
    return new Promise((resolve, reject)=>{
      const query = "INSERT INTO detail_orders SET ?"
      conn.query(query, data, (err, result)=>{
        if (!err){
          resolve(result)
        }else(
          reject(err)
        )
      })
    })
  }


}