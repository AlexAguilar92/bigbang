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

export default {
  genericService,
  serverlessFile,
  tsconfigFile,
  tsconfigPathsFile,
  indexFile,
  serviceIndexFile,
  handlerFile,
  handlerResolverFile,
  inversifyConfigFile
};