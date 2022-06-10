#! /usr/bin/env node

import { program } from 'commander'
import init from './commands/initCommand.js'
// const init = require('./commands/initCommand')


program
  .command('init')
  .description('Initializes a new project from the serverless template')
  .option('-n, --name <name>', 'The name of the project')
  .action((options) => init(options.name))

program.parse()