// require'switch
const fs = require('fs');
const colors1 = require('colors');
const colors2 = require('colors/safe');

function multiplicar(base, limite = 10, behavior) {
  return new Promise(function (resolve, reject) {
    var file = `Tabla del ${base}`;
    var table = '';
    for (var i = 1; i < limite + 1; i++) {
      table += `${base} x ${i} = ${base * i}\n`;
    };
    switch (behavior) {
      case 'save':
        fs.writeFile('multiplicar/' + file, table, function (err) {
          if (err) reject('Hubo un error: ' + err);
          else resolve(colors2.green(file) + ' saved');
        });
        break;
      case 'list':
        console.log(file.green);
        console.log(table.white);
        break;
      default:
        console.log('No options');
    };
  });
};


// exportando
module.exports = {
  multiplicar
};
