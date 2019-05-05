const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('data.json', data, (err) => {
        if (err) throw err;
        console.log('Archivo guardado');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../data.json');
        console.log(listadoPorHacer);
    }
    catch(err) {
        listadoPorHacer = [];
    }
};

const getListado = () => {
    let istadoPorHacer = cargarDB();
    return listadoPorHacer;
    
};

const actualizar = (descripcion, completado = true ) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0)
    {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    else
    {
        return false;
    }
}; 



const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push( porHacer);
    guardarDB();
    return porHacer;


}
const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0)
    {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    }
    else
    {
        return false;
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}


