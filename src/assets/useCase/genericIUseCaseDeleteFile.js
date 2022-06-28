const genericIUseCaseDeleteFile = (name) => (
  `/**
   * @interface I${name.charAt(0).toUpperCase()}${name.substring(1)}DeleteUseCase
   * @description
   */
  
  @injectable()
  export default interface I${name.charAt(0).toUpperCase()}${name.substring(1)}DeleteUseCase {
  
    /**
     * @function execute
     * @param 
     * @returns
     */
    async execute() {
    }
  }
  `)
  
  export default genericIUseCaseDeleteFile