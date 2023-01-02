import { agregarTike, inquirerMenu, pausa } from "./helpers/inquirer.js";

const main = async () => {
  let opt = "";

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        await agregarTike();
        break;

      default:
        break;
    }
    //await pausa();
  } while (opt !== "0");
};

main();
