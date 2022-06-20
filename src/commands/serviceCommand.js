import ora from 'ora'
import serviceUseCase from '../useCase/serviceUseCase.js';

const service = async (options) => {
  const { type, name } = options
  // const spinner = ora('creating service...').start()
  const { result, error } = await serviceUseCase(type, name)
  if (result === 0) {
    spinner.succeed('Service created')
  } else {
    // spinner.fail(`Error creating resource, ${error}`)
    // console.error(error)
  }
}

export default service;