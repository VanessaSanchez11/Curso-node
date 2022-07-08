const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
    describe:
      "Es la lista de la tabla de multiplicar que se muestra por consola",
  })
  .option("h", {
    alias: "heigh",
    type: "number",
    demandOption: true,
    default: 3,
    describe: "numero hasta cual se multiplicara",
  })

  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
