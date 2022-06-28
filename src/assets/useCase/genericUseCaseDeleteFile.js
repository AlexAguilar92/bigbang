const genericUseCaseDeleteFile = (name) => (
  `import "reflect-metadata";
  
  import { injectable, inject } from "inversify";
  
  import { TYPES } from "../../../../types";
  
  /**
   * @class ${name.charAt(0).toUpperCase()}${name.substring(1)}DeleteUseCase
   * @implements {IBaseUseCase}
   * @description
   */
  
  @injectable()
  export default class ${name.charAt(0).toUpperCase()}${name.substring(1)}DeleteUseCase implements I${name.charAt(0).toUpperCase()}${name.substring(1)}DeleteUseCase {
  
    constructor() {}
  
    /**
     * @function execute
     * @param 
     * @returns
     * @memberof I${name.charAt(0).toUpperCase()}${name.substring(1)}DeleteUseCase
     * @throws {Error}
     */
    async execute() {
    }
  }
  `)
  
  export default genericUseCaseDeleteFile