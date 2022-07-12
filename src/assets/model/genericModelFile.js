const genericModelFile = (name) => (
`/**
  * @class ${name.charAt(0).toUpperCase()}${name.substring(1)}
  * @description
  */

export default class ${name.charAt(0).toUpperCase()}${name.substring(1)} extends BaseEntity {

}
`)

export default genericModelFile