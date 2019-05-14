// crearTabla <modulo>
const ct = require('./multiplicar/crearTabla');
const argv = require('./config/yargs').argv;
// escribiendo tabla de multiplicar
var base = argv.base;
let comando = argv._[0];


// switch things
switch (comando) {
  case 'list':
    if (base) {
      ct.multiplicar(base, argv.limite, comando)
        .then(sucess => console.log(sucess))
        .catch(err => console.log(err));
    };
    break;
  case 'save':
    if (base) {
      ct.multiplicar(base, argv.limite, comando)
        .then(sucess => console.log(sucess))
        .catch(err => console.log(err));
    };
    break;
  default:
    console.log('Unknow command');
};

// valio morros xdxdxdxdxdxdxdxdxdxdxdxd switch
