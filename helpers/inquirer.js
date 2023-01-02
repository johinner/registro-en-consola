import inquirer from "inquirer";
import { opcionMenu } from "./opciones.js";
import colors from "colors";
import { tableMenu } from "./table.js";

const inquirerMenu = async () => {
  console.clear();
  console.log("=========================".green);
  console.log("   Control Estadistio".white);
  console.log("=========================\n".green);
  tableMenu();
  console.log();

  const { opcion } = await inquirer.prompt({
    type: "list",
    name: "opcion",
    message: "Operacion a realizar",
    choices: opcionMenu,
  });
  return opcion;
};

const pausa = async () => {
  console.log(`\n`);
  return await inquirer.prompt({
    type: "input",
    name: "enter",
    message: `Presione ${"ENTER".green} para continuar\n`,
  });
};

const agregarTike = async () => {
  return console.log("en crear");
};

export { inquirerMenu, agregarTike, pausa };
