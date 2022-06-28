const adapterUpdateFile = (name) => (
  `import "reflect-metadata";
  
  import { injectable, inject } from "inversify";
  
  import { TYPES } from "../../../../types";
  
  /**
   * @class ${name.charAt(0).toUpperCase()}${name.substring(1)}UpdateAdapter
   * @implements {IBaseAdapter}
   * @description
   */
  
  @injectable()
  export class ${name.charAt(0).toUpperCase()}${name.substring(1)}UpdateAdapter<I${name.charAt(0).toUpperCase()}${name.substring(1)}UpdateQueryDTO, Promise<I${name.charAt(0).toUpperCase()}${name.substring(1)}UpdateResponseDTO>> implements IBaseAdapter {
  
    constructor() {}
  
    /**
     * @function execute
     * @param 
     * @returns
     * @memberof IBaseAdapter
     * @throws {Error}
     */
    async execute(${name}UpdateQueryDTO: I${name.charAt(0).toUpperCase()}${name.substring(1)}UpdateQueryDTO): Promise<I${name.charAt(0).toUpperCase()}${name.substring(1)}UpdateResponseDTO> {
    }
  }
  `)
  
  export default adapterUpdateFile