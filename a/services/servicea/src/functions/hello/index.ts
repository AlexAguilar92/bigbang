import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'hello',
      },
    },
  ],
  layers: [
    'arn:aws:lambda:us-east-1:058632605534:layer:commonLibs:3'
    // {
    //   Ref: 'CommonLibsLambdaLayer',
    // }
  ]
};
