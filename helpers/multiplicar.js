const fs = require("fs");
let colors = require('colors');


const crearArchivo = async (base = 5, listar, height = 3) => {
  try {
    let salida = "";

    for (let i = 1; i <= height; i++) {
      salida += `${base} x  ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log(
        "================================================================".green
      );
      console.log(" Tabla del ", base);
      console.log(
        "================================================================"
      );
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `Tabla ${base}.txt has been created`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
