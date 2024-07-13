require('dotenv').config()
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken');
const { getUserById} = require('../models/user.model');
const { use } = require('../routers');
const { emit, off } = require('../configs/db');
const helpers = require('../helpers/response');
const { json } = require('body-parser');


module.exports = {
  // MENGAMBIL DATA USER BY EMAIL
login: async (req, res) => {
    const {email, password} = req.body
    const user = await userModel.getUserByEmail(email)

    if (!user) {
      return helpers.response(res, null, 401, "Email Yang Anda Masakan Salah!")
    }
    // mengenerate password ke dalam bentuk becryp(pengaman)
    const isPasswordMatch = bcrypt.compareSync(password, user.password);
    if (!isPasswordMatch) {
      return helpers.response(res, null, 401, "Password yang anda masukan salah!")
    }
    // membuat expire token
    const jwtExp = Math.floor(Date.now() / 1000) + (60 *  60)
    const jwtToken = jwt.sign({ id: user.id, name: user.name, email: user.email, exp: jwtExp}, process.env.JWT_PRIVATE_KEY);
    const data = {token: jwtToken}
    return helpers.response(res, data, 200, "Login Succes")
  },
  // mengubah password menjadi kode bcr
register: async(req, res) => {
    const {name, email, password} = req.body
    // mengubah paswword jadi crypt
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    // JIKA EMAIL SUDAH TERDAFTAR
    const user = await userModel.getUserByEmail(email);
    if(user){
      return helpers.response(res, null, 400, "Data Sudah Terdaftar")
    }
    const registeredUser = await userModel.registerUser({
      name: name,
      email: email,
      password: hash
    })
    const result = {
      id:registeredUser.insertId,
      name: name,
      email: email
    }
    return helpers.response(res, result, 200, "succces")
  },

  // menampilkan semua data
getAlluser: async (req, res) => {
    const {page, limit, search} = req.query  // postamn bagian params isi key dan value (page = 1, limit = 5, search = di cari berdasarakn )
    const currentPage = page ? parseInt(page):1; //
    const countUser = await userModel.countUser(search) //ambil data dari countUser(berdasarkan search)
    const dataPerPage = limit ? parseInt(limit):10;// jumlah data per halaman
    const totalPage = countUser / dataPerPage; // mengitung jumlah halaman
    const skip = (dataPerPage * currentPage) - dataPerPage; //data dimulai dari sini
    console.log(totalPage) //cek total page
    const result = await userModel.getAllUser(dataPerPage, skip, search) //output hasil;
    const meta = {
      page:currentPage, limit:dataPerPage, totalPage:Math.ceil(totalPage), totalData: countUser  //menampilkan meta data
    }
    return helpers.response(res, result, 200, "success", meta) // maka akan menampilkan output hasil
  },

  // menampilkan data berdasarkan id
getUserById: async (req, res) => {
    const {id}= req.params
    const result = await userModel.getUserById(id)
    if(!result){
      return helpers.response(res, result, 404, "Data tidak ditemukan")
      }
      return helpers.response(res, result, 200)
  },

deleteUser: async (req, res) => {
    const {id}= req.params
    const user = await userModel.getUserById(id)
    if (!user) {
    return helpers.response(res, user, 404, "Data tidak di temukan!")
    }
    await userModel.deleteUser(id)
    return helpers.response(res, user, 200)
},

updateUser: async (req, res)=>{
  const id= req.params.id
  const {name, email} = req.body
  const byId = await userModel.getUserById(id)
  if (!byId){
  return helpers.response(res, byId, 404, "Data Not Found!!")
  }
  await userModel.updateUser(id,name,email)
  const result = {name, email}
  return helpers.response(res, result, 200)
}

}