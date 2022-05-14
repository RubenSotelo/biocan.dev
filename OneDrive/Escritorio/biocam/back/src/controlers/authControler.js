const firebase = require('../database/database')

class AuthControlador {
    
    async authId(){
        var inicio = "1000000";
        do {
            var final = parseInt(inicio);
            final = final + 1;
            inicio = final.toString();
            const mascota = await firebase.collection('mascota').where("id", "==", inicio).get();
            var ing = mascota.size;
        } while (ing != 0);
        return inicio;
    }
}

const auth = new AuthControlador;
module.exports = auth;