const genericUseCaseCreateFile = (name) => (
  `import "reflect-metadata";
  
  import { injectable, inject } from "inversify";
  
  import { TYPES } from "../../../../types";
  
  /**
   * @class ${name.charAt(0).toUpperCase()}${name.substring(1)}CreateUseCase
   * @implements {IBaseUseCase}
   * @description
   */
  
  @injectable()
  export default class ${name.charAt(0).toUpperCase()}${name.substring(1)}CreateUseCase implements I${name.charAt(0).toUpperCase()}${name.substring(1)}CreateUseCase {
  
    constructor() {}
  
    /**
     * @function execute
     * @param 
     * @returns
     * @memberof I${name.charAt(0).toUpperCase()}${name.substring(1)}CreateUseCase
     * @throws {Error}
     */
    async execute() {
    }
  }
  `)
  
  export default genericUseCaseCreateFile