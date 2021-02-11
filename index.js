import app from "./server"
import chalk from "chalk"

app.listen(3000, () =>
  console.log(chalk.magenta("Banking App Ready 😃"))
);
