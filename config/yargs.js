const opt = {
  base: {
    demmand: true,
    alias: 'b',
  },
  limite: {
    alias: 'l'
  }
};

const argv = require('yargs')
  .command('list', 'Comando para listar tabla en la consola', opt)
  .command('save', 'Comando para guardar tabla en archivo de texto', opt)
  .help()
  .argv;


  module.exports = {
    argv
  };
