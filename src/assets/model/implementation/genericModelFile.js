const genericModelFile = (name) => (
`/**
  * @class ${name.charAt(0).toUpperCase()}${name.substring(1)}Model
  * @description
  */

@injectable()
export default class ${name.charAt(0).toUpperCase()}${name.substring(1)}Model {

}
`)

export default genericModelFile