const genericService = (name) => {
  ``
}
const serverlessFile = (name) => (
  `
  import type { AWS } from '@serverless/typescript';

  import ${ name } from '@functions/${ name }';
  
  const serverlessConfiguration: AWS = {
    service: '${ name }',
    frameworkVersion: '3',
    plugins: ['serverless-esbuild'],
    provider: {
      name: 'aws',
      runtime: 'nodejs14.x',
      apiGateway: {
        minimumCompressionSize: 1024,
        shouldStartNameWithService: true,
      },
      environment: {
        AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      },
    },
    // import the function via paths
    functions: { ${ name } },
    package: { individually: true },
    custom: {
      esbuild: {
        bundle: true,
        minify: false,
        sourcemap: true,
        exclude: ['aws-sdk'],
        target: 'node14',
        define: { 'require.resolve': undefined },
        platform: 'node',
        concurrency: 10,
      },
    },
  };
  
  module.exports = serverlessConfiguration;`
)

const tsconfigFile = () => (
  `
  {
    "extends": "./tsconfig.paths.json",
    "compilerOptions": {
      "lib": ["ESNext"],
      "moduleResolution": "node",
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "removeComments": true,
      "sourceMap": true,
      "target": "ES2020",
      "outDir": "lib"
    },
    "include": ["src/**/*.ts", "serverless.ts"],
    "exclude": [
      "node_modules/**/*",
      ".serverless/**/*",
      ".webpack/**/*",
      "_warmup/**/*",
      ".vscode/**/*"
    ],
    "ts-node": {
      "require": ["tsconfig-paths/register"]
    }
  }
  `  
)

const tsconfigPathsFile = () => (
  `
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@functions/*": ["src/functions/*"],
        "@libs/*": ["src/libs/*"]
      }
    }
  }
  `
)

const indexFile = (name) => (
  `
  export { default as ${ name } } from './${ name }';
  `
)

const serviceIndexFile = (name) => (
  `
  import { handlerPath } from '@libs/handler-resolver';

  export default {
    handler: \`\${handlerPath(__dirname)}/handler.main\`,
    events: [
      {
        http: {
          method: 'get',
          path: '${name}',
        },
      },
    ],
  };
  `
)

const handlerFile = (name) => (
  `import container from "../../inversify.config";
import middy from "@middy/core";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import { TYPES } from "../../../../../src/types";

const get${name.charAt(0).toUpperCase()}${name.substring(1)} = middy(async (event) => {
  const i${name.charAt(0).toUpperCase()}${name.substring(1)}Repository = container.get<I${name.charAt(0).toUpperCase()}${name.substring(1)}Repository>(TYPES.${name.charAt(0).toUpperCase()}${name.substring(1)}Repository);
  const response = await i${name.charAt(0).toUpperCase()}${name.substring(1)}Repository.findMany(event.queryStringParameters);
  return response;
});

get${name.charAt(0).toUpperCase()}${name.substring(1)}.use(httpResponseHandlerMiddleware());

export const main = middyfy(${name});
  `
)

const handlerResolverFile = () => (
`
export const handlerPath = (context: string) => {
  return \`\${context.split(process.cwd())[1].substring(1).replace(/\\\\/g, '/')}\`
};  
`
)

const inversifyConfigFile = () => (
  `import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './types';

/** Inversify Imports */

const container: Container = new Container();

/** Inversify Bindings */
`
)

const typesFile = () => (
  `export const TYPES = {
  
}
`
)

const repositoryFile = (name) => (
`import "reflect-metadata";
import { inject, injectable } from "inversify";
import { BaseRepository, IUserRepository } from "../..";
import { User } from "../";
import IDBConnectionManager from "../../../shared/database/interface/IDBConnectionManager";
import TYPES from "../../../types";
import { EntityRepository } from "typeorm";

@injectable()
@EntityRepository(${name.charAt(0).toUpperCase()}${name.substring(1)})
export default class ${name.charAt(0).toUpperCase()}${name.substring(1)}Repository extends BaseRepository<${name.charAt(0).toUpperCase()}${name.substring(1)}> implements I${name.charAt(0).toUpperCase()}${name.substring(1)}Repository {
  constructor(
    @inject(TYPES.DBConnectionManager) iDBConnectionManager: IDBConnectionManager,
  ) {
    super(${name.charAt(0).toUpperCase()}${name.substring(1)}, iDBConnectionManager);
  }
}`)

const iRepositoryFile = (name) => (
`import { IRead, IWrite } from "../..";
import { ${name.charAt(0).toUpperCase()}${name.substring(1)} } from "../";

export default interface I${name.charAt(0).toUpperCase()}${name.substring(1)}Repository extends IWrite<User>, IRead<User> {

}
`
)

const adapterFile = (name) => (
`import "reflect-metadata";

import { injectable, inject } from "inversify";

import { TYPES } from "../../../../types";

/**
 * @class ${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter
 * @implements {I${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter}
 * @description
 */

@injectable()
export class ${name.charAt(0).toUpperCase()}${name.substring(1)}Adapter implements IBaseAdapter {

  constructor() {}

  /**
   * @function findBanksByPagination
   * @param 
   * @returns
   * @memberof IBankDomain
   * @throws {Error}
   */
  async findBanksByPagination(pagination: IPaginationQueryDTO): Promise<IPaginationResponseDTO> {
  }
}
`)

export default {
  genericService,
  serverlessFile,
  tsconfigFile,
  tsconfigPathsFile,
  indexFile,
  serviceIndexFile,
  handlerFile,
  handlerResolverFile,
  inversifyConfigFile,
  typesFile,
  repositoryFile
};