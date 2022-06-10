#! /usr/bin/env node

import { program } from 'commander'
import init from './commands/initCommand.js'
// const init = require('./commands/initCommand')


program
  .command('init')
  .description('Initializes a new project from the serverless template')
  .option('-n, --name <name>', 'The name of the project')
  .action((options) => init(options.name))

program
  .command('create')
  .description('Creates a new resource depending on the type')
  .requiredOption('-t, --type <type>', 'The type of the resource (required)')
  .requiredOption('-n, --name <name>', 'The name of the resource (required)')
  .action((options) => console.log(options))

program.parse()