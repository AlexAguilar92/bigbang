import { initFindRepository } from '../repository/initRepository.js';
import ora from 'ora';

const init = async (name) => {
  const spinner = ora('Initializing project...').start();
  const { result, error } = await initFindRepository(name);
  if (result === 0) {
    spinner.succeed('Project initialized');
  } else {
    spinner.fail('Error initializing project');
    console.error(error);
  }
}

export default init;