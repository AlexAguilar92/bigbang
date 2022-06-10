#! /usr/bin/env node

const { program } = require('commander')
const init = require('./commands/initCommand')

program
  .command('init')
  .description('Initializes a new project from the serverless template')
  .option('-n, --name <name>', 'The name of the project')
  .action((name) => init(name))

program.parse()