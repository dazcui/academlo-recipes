const Users = require('./users.models')
const Posts = require('./posts.models')
const Categories = require('./categories.models')

const initModels = ()=>{

    //* 1 -> M
    //? una publicacion pertenece a un usuario
    Posts.belongsTo(Users)
    //? un usuario tiene muchas publicaciones
    Users.hasMany(Posts)


    //* 1 -> M
    //?una publicacion pertenece a una categoria
    Posts.belongsTo(Categories)
    //? una categoria tiene muchas publicaciones
    Categories.hasMany(Posts)
}
module.exports = initModels