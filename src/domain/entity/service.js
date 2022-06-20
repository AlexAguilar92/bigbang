import fs from 'fs/promises'
import { resolve } from 'path'
import generic from '../../assets/genericService.js'

const service = {
  create: async (name, path) => {
    // console.log('creating service...', name, path)
    console.info('creating service...', name, path, resolve(path))
    await fs.mkdir(`${path}services/${name}`)
    await fs.mkdir(`${path}services/${name}/src`)
    await fs.appendFile(`${path}/services/${name}/serverless.ts`, generic.serverlessFile(name))
    // const createService = await fs.writeFile(`${path}/${name}.js`, `const ${name} = {};\n\nexport default ${name};`)
  }
}

export default service