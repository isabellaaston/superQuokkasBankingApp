import fs from 'fs'
import chalk from 'chalk'

const path = './.env'

const checkEnvExists = () => {
    const envExists =  fs.existsSync(path)
    if (!envExists) console.log(chalk.bgYellow('MISSING .ENV FILE'))
}

export default checkEnvExists