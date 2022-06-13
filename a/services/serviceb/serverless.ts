import type { AWS } from '@serverless/typescript';
import hello from '@functions/hello';

const serverlessConfiguration: AWS = {
  service: 'serviceb',
  frameworkVersion: '3',
  plugins: [
    'serverless-esbuild',
    'serverless-offline',
  ],
  useDotenv: true,
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      restApiId: '${env:ApiGatewayId}',
      restApiRootResourceId: '${env:ApiGatewayResource}',
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    layers: [
      "${param:commonLibs}",
    ], 
  },
  // import the function via paths
  functions: { hello },
  package: { 
    individually: true,
    patterns: [
      '!**/node_modules/**',
    ]
  },
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

module.exports = serverlessConfiguration;
