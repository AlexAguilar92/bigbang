import { initFindRepository } from '../repository/initRepository.js';
import initAdapter from '../adapter/initAdapter.js';
import ora from 'ora';

const init = async (options) => {
  // const spinner = ora('Initializing project...').start();
  const { result, error } = await initAdapter(options);
  if (result === 0) {
    // spinner.succeed(`Project initialized in ${options.name} now you can start coding! Just cd into the folder (${options.name}) and run "npm install"`);
    console.log(`Project initialized in ${options.name}`);
  } else {
    // spinner.fail('Error initializing project');
    console.error(error);
  }
}

export default init;