const genericUseCaseUpdateFile = (name) => (
  `import "reflect-metadata";
  
  import { injectable, inject } from "inversify";
  
  import { TYPES } from "../../../../types";
  
  /**
   * @class ${name.charAt(0).toUpperCase()}${name.substring(1)}UpdateUseCase
   * @implements {IBaseUseCase}
   * @description
   */
  
  @injectable()
  export default class ${name.charAt(0).toUpperCase()}${name.substring(1)}UpdateUseCase implements I${name.charAt(0).toUpperCase()}${name.substring(1)}UpdateUseCase {
  
    constructor() {}
  
    /**
     * @function execute
     * @param 
     * @returns
     * @memberof I${name.charAt(0).toUpperCase()}${name.substring(1)}UpdateUseCase
     * @throws {Error}
     */
    async execute() {
    }
  }
  `)
  
  export default genericUseCaseUpdateFile