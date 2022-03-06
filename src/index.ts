import { list } from './list';
import { add } from './add';
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
        await execCommands(command);
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
      .filter((p) => p.name !== 'index.js')
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
        name: "chooseCommands",
        message: "Please select what you want to do",
        choices: [...files, new inquirer.Separator()],
      },
    ]);
  
    return chooseCommands;
  };

/**
 * @method execCommand
 * @description do a command.
 */
const execCommands = async (command: string) => {
  if(command.toLowerCase().includes('list')) {
    list();
  } else {
    console.log('EH CIA');
  }
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