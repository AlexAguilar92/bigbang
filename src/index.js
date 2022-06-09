#! /usr/bin/env node

const { program } = require('commander')
const init = require('./commands/init')

program
  .command('init')
  .description('List all the TODO tasks')
  .action(init)


program.parse()