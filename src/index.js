#! /usr/bin/env node

const { program } = require('commander')
const init = require('./commands/initCommand')

program
  .command('init')
  .description('Initializes a new project from the serverless template')
  .option('-b, --branch <branch>', 'The branch to clone from')
  .action((branch) => init(branch))

program.parse()