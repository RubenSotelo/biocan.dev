const firebase = require('../database/database')
const aut = require('./authControler');

class mascotaControler {
    
    async crear (req, res){
        var {nombre, edad, peso, medico, propietario, ingreso, sexo} = req.body;
        var id = await aut.authId();
        await firebase.collection('mascota').add({
            id, nombre, edad, peso, medico, propietario, ingreso, sexo
        })
        res.json('registro creado');
    }

    async buscar (req, res){
        var { id } = req.params;
        console.log("Se busca --> Id >> "+ id);
        const mascota = await firebase.collection('mascota').where("id", "==", id).get();
        res.json(mascota.docs[0].data());
    }

    async eliminar (req, res){
        var { id } = req.params;
        const mascota = await firebase.collection('mascota').where("id", "==", id).get();
        var idRegistro = mascota.docs[0].id;
        await firebase.collection('mascota').doc(idRegistro).delete();
        res.json('registro eliminado');
    } 

    async editar (req, res){
        var { id } = req.params;
        const mascota = await firebase.collection('mascota').where("id", "==", id).get();
        var idRegistro = mascota.docs[0].id;
        await firebase.collection('mascota').doc(idRegistro).update(req.body);
        res.json('registro Actualizado');
    }
}
const controlers = new mascotaControler;
module.exports = controlers;