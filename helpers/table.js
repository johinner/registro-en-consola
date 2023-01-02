import { Table } from "console-table-printer";
import chalk from "chalk";

const tableMenu = () => {
  const p = new Table({
    style: {
      headerTop: {
        left: chalk.blue("╔"),
        mid: chalk.blue("╦"),
        right: chalk.blue("╗"),
        other: chalk.blue("═"),
      },
      headerBottom: {
        left: chalk.blue("╟"),
        mid: chalk.blue("╬"),
        right: chalk.blue("╢"),
        other: chalk.blue("═"),
      },
      tableBottom: {
        left: chalk.blue("╚"),
        mid: chalk.blue("╩"),
        right: chalk.blue("╝"),
        other: chalk.blue("═"),
      },
      vertical: chalk.blue("║"),
    },
    columns: [
      { name: "Capital_Inicial", alignment: "center" },
      { name: "capityal_Actual", alignment: "center" },
    ],
  });
  // add rows with color
  p.addRow(
    {
      Capital_Inicial: 2000,
      capityal_Actual: 3500,
    },
    { color: "green" }
  );
  // print
  p.printTable();
};

export { tableMenu };
