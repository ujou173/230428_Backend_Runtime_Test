import inquirer from 'inquirer';
const { Command } = require('commander');

const commander  = new Command();

commander
  .version('V 0.0.1')
  .description('CLI Interface')
  .option('-f, --filename <filename>', 'set filename')
  .option('-t, --title <title>', 'set title')
  .option('-p, --content <content>', 'set content')

  // commander.Command('split')