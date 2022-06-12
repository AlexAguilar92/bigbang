import { initFindRepository } from '../repository/initRepository.js'
import { rm, appendFile } from 'fs/promises'

const initUseCase = async (name) => {
  const { result, error } = await initFindRepository(name)

  try {
    const remove = rm(`./${name}/.git`, { recursive: true, force: true })
    const appendeFile = appendFile(`./${name}/.bigbang.json`, `{"name": "${name}"}`, 'utf8')
    await Promise.allSettled([remove, appendeFile])

    return { result, error }
  } catch (error) {
    return { result: 1, error }
  }
}

export default initUseCase