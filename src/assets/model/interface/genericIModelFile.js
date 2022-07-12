const genericIModelFile = (name) => (
`/**
  * @interface I${name.charAt(0).toUpperCase()}${name.substring(1)}Model
  * @description
  */

export default interface I${name.charAt(0).toUpperCase()}${name.substring(1)}Model {

}
`)
  
export default genericIModelFile