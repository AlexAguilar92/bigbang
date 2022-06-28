import service from '../domain/entity/service.js'
import fs from 'fs/promises'
import { resolve } from 'path'

const createOptions = {
  service: service.create,
  default: () => 1
}

const getCreateTypes = async (type, name, path) => {
  return createOptions[type](name, path) || createOptions.default
}

const serviceUseCase = async (type, name) => {
  // console.log('serviceUseCase', type, name)
  let flag = false
  let path = './'
  let deepness = 0
  
  while (!flag) {
    // console.log(path)
    if (deepness === 100) return { result: 1, error: 'no project found' }
    if (resolve(path) === '/') return { result: 1, error: 'no project found' }
    const files = await fs.readdir(path)
    // console.log(files)
    // console.log(resolve(path))
    if (files.includes('.bigbang.json')) {
      flag = true
      break
    }
    path += '../'
    deepness++
  }
  // console.log('type', type)
  const createOption = await getCreateTypes(type, name, path)
  // console.log('createOption', createOption)
  return createOption
  // if (createOption === 1) return { result: 1, error: 'invalid option' }

  return createOption
}



export default serviceUseCase