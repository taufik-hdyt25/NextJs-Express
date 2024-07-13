require('dotenv').config()
const productModel = require('../models/product.models')
const {getProuctByid} = require('../models/product.models');
const {use} = require('../routers');
const {emit} = require('../configs/db');
const helpers = require('../helpers/response')


module.exports = {
  create: async(req, res) => {
  const {name, price, stock, brand, type} = req.body
  const created = await productModel.createProduct({
    name: name,
    price: price,
    stock: stock,
    brand: brand,
    type: type
  })

  const result = {
    id:created.insertId,
    name: name,
    price: price,
    stock: stock,
    brand: brand,
    type: type
  }
  return helpers.response(res, result, 200, "succces")
  },

  // Menampilkan semua product
    getAllProduct: async (req,res)=>{
      const {page, limit, search} = req.query
      const currentPage = page ? parseInt(page):1;
      const countProduct = await productModel.countProduct(search)
      const dataPerPage = limit ? parseInt(limit):10;                 //data perhalaman
      const totalPage = countProduct / dataPerPage;                   //menghitung total page
      const skip = (dataPerPage * currentPage) - dataPerPage;
      console.log(totalPage)
      const result = await productModel.getAllProduct(dataPerPage, skip, search)
      const meta = {
        page:currentPage, limit:dataPerPage, totalPage:Math.ceil(totalPage), totalData:countProduct
      }
      return helpers.response(res, result, 200, "succces", meta)
    },

    getProductById: async (req, res) =>{
      const {id}= req.params
      const result = await productModel.getProductById(id)
      if(!result){
      return helpers.response(res, result, 404, "Data tidak di temukan")
      }
      return helpers.response(res, result, 200)
    },

    updateProduct: async (req, res) =>{
      const id = req.params.id
      const {name, price, stock, brand, type} = req.body
      const byId = await productModel.getProductById(id)
      if (!byId){
        return helpers.response(res, byId, 404, "Data Not Found!!")
      }
      await productModel.updateProduct(id, name, price, stock, brand, type)
      const result = {name, price, stock, brand, type}
      return helpers.response(res, result, 200)

    },

    deleteProduct: async (req, res)=>{
      const {id}=req.params
      const product = await productModel.getProductById(id)
      if (!product) {
      return helpers.response(res, product, 404, "Data tidak di temukan!")
      }
      await productModel.deleteProduct(id)
      return helpers.response(res, null, 200, "Data telah di hapus")
    }



}