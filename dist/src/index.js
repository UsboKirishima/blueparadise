"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.program = void 0;
const list_1 = require("./list");
const inquirer_1 = __importDefault(require("inquirer"));
const fs_1 = require("fs");
const util_1 = require("util");
const colors_1 = __importDefault(require("colors"));
colors_1.default.enable();
const readDir = (0, util_1.promisify)(fs_1.readdir);
/**
 * @method program
 * @description the Program
 */
const program = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield printWelcome();
        const command = yield chooseCommands();
        console.log(command);
        yield execCommands(command);
    }
    catch (error) {
        console.error('%s', error);
    }
});
exports.program = program;
/**
 * @method getCommands
 * @description Get the commands files.
 */
const getCommandsFiles = () => __awaiter(void 0, void 0, void 0, function* () {
    const contents = yield readDir(__dirname, { withFileTypes: true });
    const files = contents
        .filter((p) => p.isFile())
        .filter((p) => p.name !== 'index.js')
        .map((p) => p.name.replace('.js', ' '));
    return files;
});
/**
* @method chooseCommand
* @description Choose a command.
*/
const chooseCommands = () => __awaiter(void 0, void 0, void 0, function* () {
    const files = yield getCommandsFiles();
    const { chooseCommands } = yield inquirer_1.default.prompt([
        {
            type: "list",
            name: "chooseCommands",
            message: "Please select what you want to do",
            choices: [...files, new inquirer_1.default.Separator()],
        },
    ]);
    return chooseCommands;
});
/**
 * @method execCommand
 * @description do a command.
 */
const execCommands = (command) => __awaiter(void 0, void 0, void 0, function* () {
    if (command.toLowerCase().includes('list')) {
        (0, list_1.list)();
    }
    else {
        console.log('EH CIA');
    }
});
const printWelcome = () => __awaiter(void 0, void 0, void 0, function* () {
    yield console.log(String.raw `
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

${colors_1.default.blue('Welcome to BlueParadise password manager!')}
=========================================
${colors_1.default.blue('By UsboKirishima')}
`);
});
