const genericIUseCaseFindFile = (name) => (
`/**
  * @interface I${name.charAt(0).toUpperCase()}${name.substring(1)}FindUseCase
  * @description
  */

export default interface I${name.charAt(0).toUpperCase()}${name.substring(1)}FindUseCase {

  /**
   * @function execute
   * @param 
   * @returns
   */
  async execute() {
  }
}
`)
  
  export default genericIUseCaseFindFile