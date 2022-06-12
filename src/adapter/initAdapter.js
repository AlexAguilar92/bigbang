import initUseCase from '../useCase/initUseCase.js'

const initAdapter = async (options) => {
  const { name } = options
  console.log(name)
  const { result, error } = await initUseCase(name)
  return { result, error }
}

export default initAdapter