const adapterDeleteFile = (name) => (
  `import "reflect-metadata";
  
  import { injectable, inject } from "inversify";
  
  import { TYPES } from "../../../../types";
  
  /**
   * @class ${name.charAt(0).toUpperCase()}${name.substring(1)}DeleteAdapter
   * @implements {IBaseAdapter}
   * @description
   */
  
  @injectable()
  export class ${name.charAt(0).toUpperCase()}${name.substring(1)}DeleteAdapter<I${name.charAt(0).toUpperCase()}${name.substring(1)}DeleteQueryDTO, Promise<I${name.charAt(0).toUpperCase()}${name.substring(1)}DeleteResponseDTO>> implements IBaseAdapter {
  
    constructor() {}
  
    /**
     * @function execute
     * @param 
     * @returns
     * @memberof IBaseAdapter
     * @throws {Error}
     */
    async execute(${name}DeleteQueryDTO: I${name.charAt(0).toUpperCase()}${name.substring(1)}DeleteQueryDTO): Promise<I${name.charAt(0).toUpperCase()}${name.substring(1)}DeleteResponseDTO> {
    }
  }
  `)
  
  export default adapterDeleteFile