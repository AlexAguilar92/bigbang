import serviceUseCase from '../useCase/serviceUseCase.js'

const serviceAdapter = async (options) => {
  const { type, name } = options
  // console.log(name)
  const { result, error } = await serviceUseCase(type, name)
  console.log('serviceAdapter', result, error)
  return { result, error }
}

export default serviceAdapter