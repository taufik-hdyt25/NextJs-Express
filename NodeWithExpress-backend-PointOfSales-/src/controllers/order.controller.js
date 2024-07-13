require('dotenv').config()
const randomString = require('../helpers/randomString')
const orderedModel = require('../models/order.model')
const helpers = require('../helpers/response')
const productModels = require('../models/product.models')
const { saveOrderDetail } = require('../models/order.model')

module.exports = {
  createOrder: async(req, res) => {
  const {user, cart_items} = req.body
  const random = randomString.randomString(10)
  const created = await orderedModel.Order({
    id_user: user.id,
    order_no: random
  })
  const id = created.insertId

  for (const [index, item] of cart_items.entries()) {
    const product = await productModels.getProductById(item.id_product)
    cart_items[index] = {...item, harga:product.price, id_order:id}
    await orderedModel.saveOrderDetail(cart_items[index])
     }

     console.log( cart_items)

  const result = {
    id_user: user.id,
    order_no: random
  }
  return helpers.response(res, result, 200, "succces")
  },

}