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

const tsconfigFile = (name) => (
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

const tsconfigPathsFile = (name) => (
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

export default {
  genericService,
  serverlessFile,
  tsconfigFile,
  tsconfigPathsFile
};