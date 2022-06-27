import fs from 'fs/promises'
import { existsSync } from 'fs'
import { resolve } from 'path'
import generic from '../../assets/genericService.js'

const service = {
  create: async (name, path) => {
    // console.log('creating service...', name, path)
    try {
      console.info('creating service...', name, path, resolve(path))
      await fs.mkdir(`${path}services/${name}Service`)
      await fs.mkdir(`${path}services/${name}Service/src`)
      await fs.mkdir(`${path}services/${name}Service/src/functions`)
      await fs.mkdir(`${path}services/${name}Service/src/libs`)
      await fs.mkdir(`${path}services/${name}Service/src/functions/${name}`)
      if (!existsSync(`${path}services/${name}Service/src/inversify.config.ts`))
        await fs.appendFile(`${path}services/${name}Service/src/inversify.config.ts`, generic.inversifyConfigFile())
      const inversifyConfig = await fs.readFile(`${path}services/${name}Service/src/inversify.config.ts`)
      let updatedInversifyConfig = inversifyConfig.toString().replace('/** Inversify Imports */',
`/** Inversify Imports */
//#region ${name.charAt(0).toUpperCase()}${name.substring(1)} imports
import I${name.charAt(0).toUpperCase()}${name.substring(1)}Repository from '../../../../src/modules/${name.charAt(0).toUpperCase()}${name.substring(1)}/domain/repository/interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}Repository';
import ${name.charAt(0).toUpperCase()}${name.substring(1)}Repository from '../../../../src/modules/${name.charAt(0).toUpperCase()}${name.substring(1)}/domain/repository/implementation/${name.charAt(0).toUpperCase()}${name.substring(1)}Repository';
import I${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter from '../../../../src/modules/${name.charAt(0).toUpperCase()}${name.substring(1)}/adapter/interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter';
import ${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter from '../../../../src/modules/${name.charAt(0).toUpperCase()}${name.substring(1)}/adapter/implementation/${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter';
import I${name.charAt(0).toUpperCase()}${name.substring(1)}UseCase from '../../../../src/modules/${name.charAt(0).toUpperCase()}${name.substring(1)}/useCase/interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}UseCase';
import ${name.charAt(0).toUpperCase()}${name.substring(1)}UseCase from '../../../../src/modules/${name.charAt(0).toUpperCase()}${name.substring(1)}/useCase/implementation/${name.charAt(0).toUpperCase()}${name.substring(1)}UseCase';
//#endregion
`)
      updatedInversifyConfig = updatedInversifyConfig.replace('/** Inversify Bindings */',
`/** Inversify Bindings */
//#region ${name.charAt(0).toUpperCase()}${name.substring(1)} bindings
container.bind<I${name.charAt(0).toUpperCase()}${name.substring(1)}Repository>(TYPES.${name.charAt(0).toUpperCase()}${name.substring(1)}Repository).to(${name.charAt(0).toUpperCase()}${name.substring(1)}Repository);
container.bind<I${name.charAt(0).toUpperCase()}${name.substring(1)}UseCase>(TYPES.${name.charAt(0).toUpperCase()}${name.substring(1)}UseCase).to(${name.charAt(0).toUpperCase()}${name.substring(1)}UseCase);
container.bind<I${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter>(TYPES.${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter).to(${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter);
//#endregion
`)
      console.log('updatedInversifyConfig', updatedInversifyConfig)
      await fs.writeFile(`${path}services/${name}Service/src/inversify.config.ts`, updatedInversifyConfig)
      await fs.appendFile(`${path}/services/${name}Service/serverless.ts`, generic.serverlessFile(name))
      await fs.appendFile(`${path}/services/${name}Service/tsconfig.json`, generic.tsconfigFile())
      await fs.appendFile(`${path}/services/${name}Service/tsconfig.paths.json`, generic.tsconfigPathsFile(name))
      await fs.appendFile(`${path}/services/${name}Service/src/functions/index.ts`, generic.indexFile(name))
      await fs.appendFile(`${path}/services/${name}Service/src/functions/${name}/index.ts`, generic.serviceIndexFile(name))
      await fs.appendFile(`${path}/services/${name}Service/src/functions/${name}/handler.ts`, generic.handlerFile(name))
      await fs.appendFile(`${path}/services/${name}Service/src/libs/handler-resolver.ts`, generic.handlerResolverFile(name))
      console.log(generic.typesFile())
      if (!existsSync(`${path}src/types.ts`))
        await fs.appendFile(`${path}src/types.ts`, generic.typesFile())
      const types = await fs.readFile(`${path}/src/types.ts`)
      let updatedTypes = types.toString().replace('{',
`{
  //#region ${name.charAt(0).toUpperCase()}${name.substring(1)} symbols
  ${name.charAt(0).toUpperCase()}${name.substring(1)}Repository: Symbol.for("${name.charAt(0).toUpperCase()}${name.substring(1)}Repository"),
  ${name.charAt(0).toUpperCase()}${name.substring(1)}UseCase: Symbol.for("${name.charAt(0).toUpperCase()}${name.substring(1)}UseCase"),
  ${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter: Symbol.for("${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter"),
  //#endregion
`)
      console.log('updatedTypes', updatedTypes)
      await fs.writeFile(`${path}src/types.ts`, updatedTypes)
      console.log('path', resolve(path))
      await fs.mkdir(`${path}src/modules/${name}/`)
      await fs.mkdir(`${path}src/modules/${name}/adapter`)
      await fs.mkdir(`${path}src/modules/${name}/adapter/implementation`)
      await fs.appendFile(`${path}src/modules/${name}/adapter/implementation/${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter.ts`)
      await fs.mkdir(`${path}src/modules/${name}/adapter/interface`)
      await fs.appendFile(`${path}src/modules/${name}/adapter/interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter.ts`)
      await fs.mkdir(`${path}src/modules/${name}/domain`)
      await fs.mkdir(`${path}src/modules/${name}/domain/entity`)
      await fs.appendFile(`${path}src/modules/${name}/domain/entity/${name.charAt(0).toUpperCase()}${name.substring(1)}.ts`)
      await fs.mkdir(`${path}src/modules/${name}/domain/repository`)
      await fs.mkdir(`${path}src/modules/${name}/domain/repository/implementation`)
      await fs.appendFile(`${path}src/modules/${name}/domain/repository/implementation/${name.charAt(0).toUpperCase()}${name.substring(1)}Repository.ts`)
      await fs.mkdir(`${path}src/modules/${name}/domain/repository/interface`)
      await fs.appendFile(`${path}src/modules/${name}/domain/repository/adapter/interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}Repository.ts`)
      await fs.mkdir(`${path}src/modules/${name}/useCase`)
      await fs.mkdir(`${path}src/modules/${name}/useCase/implementation`)
      await fs.appendFile(`${path}src/modules/${name}/useCase/implementation/${name.charAt(0).toUpperCase()}${name.substring(1)}UseCase.ts`)
      await fs.mkdir(`${path}src/modules/${name}/useCase/interface`)
      await fs.appendFile(`${path}src/modules/${name}/useCase/interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}UseCase.ts`)
      // const createService = await fs.writeFile(`${path}/${name}.js`, `const ${name} = {};\n\nexport default ${name};`)
      return { result: 0, error: null }
    } catch (error) {
      console.error('service.js.service error', error)
      return { result: 1, error }
    }
    
  }
}

export default service