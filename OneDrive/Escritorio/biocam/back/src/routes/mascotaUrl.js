const express  = require("express");
const controlers = require("../controlers/mascotaControler");
class mascotaRoutes {
  
    constructor() {
        this.rutas = express();
        this.config();
    }
    
    config() {
        this.rutas.post('/registro', controlers.crear);
        this.rutas.get('/buscar/:id', controlers.buscar);
        this.rutas.get('/eliminar/:id', controlers.eliminar);
        this.rutas.post('/actulizar/:id', controlers.editar);
        
    }

}

module.exports = new mascotaRoutes().rutas;