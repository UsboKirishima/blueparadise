import packageJson from '../package.json';
import inquirer from 'inquirer';
import { createWriteStream, readdir } from 'fs';
import { promisify } from 'util';
import colors from 'colors';

colors.enable();
const readDir = promisify(readdir);

/**
 * @method program
 * @description the Program
 */
 export const program = async () => {
    try {
        await printWelcome();
        const command = await chooseCommands();
    } catch(error) {
        console.error('%s', error);
    }
 }

/**
 * @method getCommands
 * @description Get the commands files.
 */
 const getCommandsFiles = async () => {
    const contents = await readDir(__dirname, { withFileTypes: true });
    const files = contents
      .filter((p) => p.isFile())
      .map((p) => p.name.replace('.js', ' '));
  
    return files;
  };

  /**
 * @method chooseCommand
 * @description Choose a command.
 */
const chooseCommands = async () => {
    const files = await getCommandsFiles();
    const { chooseCommands } = await inquirer.prompt([
      {
        type: "list",
        name: "chooseCommand",
        message: "Please select what you want to do",
        choices: [...files, new inquirer.Separator()],
      },
    ]);
  
    return chooseCommands;
  };

const printWelcome = async () => {
await console.log(String.raw`
   ## 
   ###----## 
   ###      \
   /        ##__
  /       ##   #     --#  
 :           __/   -#   :  
,'          _\     >     : 
####      :'     #########:   
##########          |  ###:   
######################    :
#######################   :
######################...,'
            :
             ;
              ;
               ;
              ,;
           ;##########
          ;###########
,,,,,,,,,;########### 

${colors.blue('Welcome to BlueParadise password manager!')}
=========================================
${colors.blue('By UsboKirishima')}
`);
} 