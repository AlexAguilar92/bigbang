import fs from 'fs/promises'
import { existsSync } from 'fs'
import generic from '../../assets/genericService.js'
import genericAdapterFindFile from '../../assets/adapter/genericAdapterFindFile.js'
import genericEntityFile from '../../assets/domain/entity/implementation/genericEntityFile.js'
import genericIEntityFile from '../../assets/domain/entity/interface/genericIEntityFile.js'
import genericRepositoryFile from '../../assets/domain/repository/genericRepositoryFile.js'
import genericIRepositoryFile from '../../assets/domain/repository/genericIRepositoryFile.js'
import genericUseCaseFindFile from '../../assets/useCase/genericUseCaseFindFile.js'
import genericIUseCaseFindFile from '../../assets/useCase/genericIUseCaseFindFile.js'

const service = {
  create: async (name, path) => {
    // console.log('creating service...', name, path)
    try {
      // console.info('creating service...', name, path, resolve(path))
      await fs.mkdir(`${path}services/${name}Service`)
      await fs.mkdir(`${path}services/${name}Service/src`)
      await fs.mkdir(`${path}services/${name}Service/src/functions`)
      await fs.mkdir(`${path}services/${name}Service/src/libs`)
      await fs.mkdir(`${path}services/${name}Service/src/functions/${name}`)
      if (!existsSync(`${path}services/${name}Service/src/inversify.config.ts`))
        await fs.appendFile(`${path}services/${name}Service/src/inversify.config.ts`, generic.inversifyConfigFile())
      // const inversifyConfig = await fs.readFile(`${path}services/${name}Service/src/inversify.config.ts`)
//       let updatedInversifyConfig = inversifyConfig.toString().replace('/** Inversify Imports */', `/** Inversify Imports */
// //#region DBConnectionManager imports
// import IDBConnectionManager from '../../../src/shared/database/interface/IDBConnectionManager';
// import DBConnectionManager from '../../../src/shared/database/implementation/DBConnectionManager';
// //#endregion

// // #region ${name.charAt(0).toUpperCase()}${name.substring(1)}Repositry imports
// import I${name.charAt(0).toUpperCase()}${name.substring(1)}Repository from '../../../src/modules/${name.charAt(0).toUpperCase()}${name.substring(1)}/domain/repository/interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}Repository';
// import ${name.charAt(0).toUpperCase()}${name.substring(1)}Repository from '../../../src/modules/${name.charAt(0).toUpperCase()}${name.substring(1)}/domain/repository/implementation/${name.charAt(0).toUpperCase()}${name.substring(1)}Repository';
// //#endregion
// `)
//       updatedInversifyConfig = updatedInversifyConfig.replace('/** Inversify Bindings */', `/** Inversify Bindings */
// //#region DBConnectionManager bindings
// container.bind<IDBConnectionManager>(TYPES.DBConnectionManager).to(DBConnectionManager);
// //#endregion

// //#region ${name.charAt(0).toUpperCase()}${name.substring(1)}Repository bindings
// container.bind<I${name.charAt(0).toUpperCase()}${name.substring(1)}Repository>(TYPES.${name.charAt(0).toUpperCase()}${name.substring(1)}Repository).to(${name.charAt(0).toUpperCase()}${name.substring(1)}Repository);
// //#endregion

// `)
      // console.log('updatedInversifyConfig', updatedInversifyConfig)
      // await fs.writeFile(`${path}services/${name}Service/src/inversify.config.ts`, updatedInversifyConfig)
      await fs.appendFile(`${path}/services/${name}Service/serverless.ts`, generic.serverlessFile(name))
      await fs.appendFile(`${path}/services/${name}Service/tsconfig.json`, generic.tsconfigFile())
      await fs.appendFile(`${path}/services/${name}Service/tsconfig.paths.json`, generic.tsconfigPathsFile(name))
      await fs.appendFile(`${path}/services/${name}Service/src/functions/index.ts`, generic.indexFile(name))
      await fs.appendFile(`${path}/services/${name}Service/src/functions/${name}/index.ts`, generic.serviceIndexFile(name))
      await fs.appendFile(`${path}/services/${name}Service/src/functions/${name}/handler.ts`, generic.handlerFile(name))
      await fs.appendFile(`${path}/services/${name}Service/src/libs/handler-resolver.ts`, generic.handlerResolverFile(name))
      // console.log(generic.typesFile())
      if (!existsSync(`${path}src/types.ts`))
        await fs.appendFile(`${path}src/types.ts`, generic.typesFile())
      const types = await fs.readFile(`${path}/src/types.ts`)
      let updatedTypes = types.toString().replace('{',`{
  //#region ${name.charAt(0).toUpperCase()}${name.substring(1)} symbols
  ${name.charAt(0).toUpperCase()}${name.substring(1)}Repository: Symbol.for("${name.charAt(0).toUpperCase()}${name.substring(1)}Repository"),
  ${name.charAt(0).toUpperCase()}${name.substring(1)}UseCase: Symbol.for("${name.charAt(0).toUpperCase()}${name.substring(1)}UseCase"),
  ${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter: Symbol.for("${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter"),
  //#endregion
`)
      // console.log('updatedTypes', updatedTypes)
      await fs.writeFile(`${path}src/types.ts`, updatedTypes)
      // console.log('path', resolve(path))
      await fs.mkdir(`${path}src/modules/${name}/`)
      await fs.mkdir(`${path}src/modules/${name}/adapter`)
      // await fs.mkdir(`${path}src/modules/${name}/adapter/implementation`)
      await fs.appendFile(`${path}src/modules/${name}/adapter/${name.charAt(0).toUpperCase()}${name.substring(1)}FindAdapter.ts`, genericAdapterFindFile(name))
      // await fs.appendFile(`${path}src/modules/${name}/adapter/${name.charAt(0).toUpperCase()}${name.substring(1)}CreateAdapter.ts`, genericAdapterCreateFile(name))
      // await fs.appendFile(`${path}src/modules/${name}/adapter/${name.charAt(0).toUpperCase()}${name.substring(1)}UpdateAdapter.ts`, genericAdapterUpdateFile(name))
      // await fs.appendFile(`${path}src/modules/${name}/adapter/${name.charAt(0).toUpperCase()}${name.substring(1)}DeleteAdapter.ts`, genericAdapterDeleteFile(name))
      // await fs.mkdir(`${path}src/modules/${name}/adapter/interface`)
      // await fs.appendFile(`${path}src/modules/${name}/adapter/interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter.ts`)
      await fs.mkdir(`${path}src/modules/${name}/domain`)
      await fs.mkdir(`${path}src/modules/${name}/domain/entity`)
      await fs.mkdir(`${path}src/modules/${name}/domain/entity/implementation`)
      await fs.mkdir(`${path}src/modules/${name}/domain/entity/interface`)
      await fs.appendFile(`${path}src/modules/${name}/domain/entity/implementation/${name.charAt(0).toUpperCase()}${name.substring(1)}Domain.ts`, genericEntityFile(name))
      await fs.appendFile(`${path}src/modules/${name}/domain/entity/interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}Domain.ts`, genericIEntityFile(name))
      await fs.mkdir(`${path}src/modules/${name}/domain/repository`)
      await fs.mkdir(`${path}src/modules/${name}/domain/repository/implementation`)
      await fs.appendFile(`${path}src/modules/${name}/domain/repository/implementation/${name.charAt(0).toUpperCase()}${name.substring(1)}Repository.ts`, genericRepositoryFile(name))
      await fs.mkdir(`${path}src/modules/${name}/domain/repository/interface`)
      await fs.appendFile(`${path}src/modules/${name}/domain/repository/interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}Repository.ts`, genericIRepositoryFile(name))
      await fs.mkdir(`${path}src/modules/${name}/useCase`)
      await fs.mkdir(`${path}src/modules/${name}/useCase/implementation`)
      await fs.appendFile(`${path}src/modules/${name}/useCase/implementation/${name.charAt(0).toUpperCase()}${name.substring(1)}FindUseCase.ts`, genericUseCaseFindFile(name))
      // await fs.appendFile(`${path}src/modules/${name}/useCase/implementation/${name.charAt(0).toUpperCase()}${name.substring(1)}CreateUseCase.ts`, genericUseCaseCreateFile(name))
      // await fs.appendFile(`${path}src/modules/${name}/useCase/implementation/${name.charAt(0).toUpperCase()}${name.substring(1)}UpdateUseCase.ts`, genericUseCaseUpdateFile(name))
      // await fs.appendFile(`${path}src/modules/${name}/useCase/implementation/${name.charAt(0).toUpperCase()}${name.substring(1)}DeleteUseCase.ts`, genericUseCaseDeleteFile(name))
      await fs.mkdir(`${path}src/modules/${name}/useCase/interface`)
      // if (!existsSync(`${path}src/modules/${name}/useCase/interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}FindUseCase.ts`))
      await fs.appendFile(`${path}src/modules/${name}/useCase/interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}FindUseCase.ts`, genericIUseCaseFindFile(name))
      // await fs.appendFile(`${path}src/modules/${name}/useCase/interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}CreateUseCase.ts`, genericIUseCaseCreateFile(name))
      // await fs.appendFile(`${path}src/modules/${name}/useCase/interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}UpdateUseCase.ts`, genericIUseCaseUpdateFile(name))
      // await fs.appendFile(`${path}src/modules/${name}/useCase/interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}DeleteUseCase.ts`, genericIUseCaseDeleteFile(name))
      // const createService = await fs.writeFile(`${path}/${name}.js`, `const ${name} = {};\n\nexport default ${name};`)

      // await fs.mkdir(`${path}src/model/${name}`)
      // await fs.mkdir(`${path}src/model/${name}/implementation`)
      // await fs.mkdir(`${path}src/model/${name}/interface`)
      // await fs.appendFile(`${path}src/model/${name}/implementation/${name.charAt(0).toUpperCase()}${name.substring(1)}Model.ts`, genericIModelFile(name))
      // await fs.appendFile(`${path}src/model/${name}/interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}Model.ts`, genericModelFile(name))
      return { result: 0, error: null }
    } catch (error) {
      // console.error('service.js.service error', error)
      return { result: 1, error }
    }
    
  }
}

export default service