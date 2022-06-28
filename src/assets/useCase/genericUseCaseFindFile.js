const genericUseCaseFindFile = (name) => (
  `import "reflect-metadata";
  
  import { injectable, inject } from "inversify";
  
  import { TYPES } from "../../../../types";
  
  /**
   * @class ${name.charAt(0).toUpperCase()}${name.substring(1)}FindUseCase
   * @implements {IBaseUseCase}
   * @description
   */
  
  @injectable()
  export default class ${name.charAt(0).toUpperCase()}${name.substring(1)}FindUseCase implements I${name.charAt(0).toUpperCase()}${name.substring(1)}FindUseCase {
  
    constructor() {}
  
    /**
     * @function execute
     * @param 
     * @returns
     * @memberof I${name.charAt(0).toUpperCase()}${name.substring(1)}FindUseCase
     * @throws {Error}
     */
    async execute() {
    }
  }
  `)
  
  export default genericUseCaseFindFile