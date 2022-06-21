#! /usr/bin/env node

import { program } from 'commander'
import init from './commands/initCommand.js'
import service from './commands/serviceCommand.js'
// const init = require('./commands/initCommand')


program
  .command('init')
  .description('Initializes a new project from the serverless template')
  .requiredOption('-n, --name <name>', 'The name of the project')
  .action((options) => init(options))

program
  .command('create')
  .description('Creates a new resource depending on the type')
  .requiredOption('-t, --type <type>', 'The type of the resource (required)')
  .requiredOption('-n, --name <name>', 'The name of the resource (required)')
  .action((options) => service(options))

program.parse()