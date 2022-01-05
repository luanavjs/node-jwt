const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect('mongodb://localhost/node-jwt')
    .then(()=> console.log("BDD conectada"))
    .catch(()=> console.log("BDD no se pudo conectar"))
