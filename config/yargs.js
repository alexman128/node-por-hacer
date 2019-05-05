const descripcion =  {
    alias: 'd',
    demand: true
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento en todo', {
        descripcion
    })
    .command('actualizar', 'actualiza una tarea', {
        descripcion,
        completado: {
            alias: 'c',
            default: true,
        }
    })
    .command('borrar', 'borra una tarea', {
        descripcion,
        
    })
    .help()
    .argv;


module.exports = {
    argv
};