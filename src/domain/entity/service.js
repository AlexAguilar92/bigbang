import fs from 'fs/promises'

const service = {
  create: async (name, path) => {
    // console.log('creating service...', name, path)
    const createService = await fs.writeFile(`${path}/${name}.js`, `const ${name} = {};\n\nexport default ${name};`)
  }
}

export default service