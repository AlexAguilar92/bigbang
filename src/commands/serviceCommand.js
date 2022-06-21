import ora from 'ora'
import serviceAdapter from '../adapter/serviceAdapter.js';

const service = async (options) => {
  // const spinner = ora('creating service...').start()
  const { result, error } = await serviceAdapter(options)
  if (result === 0) {
    spinner.succeed('Service created')
  } else {
    // spinner.fail(`Error creating resource, ${error}`)
    // console.error(error)
  }
}

export default service;