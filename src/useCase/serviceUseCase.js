import service from '../domain/entity/service.js'
import fs from 'fs/promises'
import { resolve } from 'path'

const createOptions = {
  service,
  default: () => 1
}

const getCreateTypes = async (type) => {
  return (createOptions[type] || createOptions.default)()
}

const serviceUseCase = async (type, name) => {
  let flag = false
  let path = './'
  let deepness = 0
  
  while (!flag) {
    if (deepness === 100) return { result: 1, error: 'no project found' }
    if (resolve(path) === '/') return { result: 1, error: 'no project found' }
    const files = await fs.readdir(path)
    // console.log(files)
    // console.log(resolve(path))
    if (files.includes('.bigbang.json')) {
      flag = true
    }
    path += '../'
    deepness++
  }
  // console.log('type', type)
  const createOption = await getCreateTypes(type)
  // console.log('createOption', createOption)
  if (createOption === 1) return { result: 1, error: 'invalid option' }
}



export default serviceUseCase