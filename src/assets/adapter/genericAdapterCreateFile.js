const genericAdapterCreateFile = (name) => (
`import "reflect-metadata";

import { injectable, inject } from "inversify";

import { TYPES } from "../../../../types";

/**
 * @class ${name.charAt(0).toUpperCase()}${name.substring(1)}CreateAdapter
 * @implements {IBaseAdapter}
 * @description
 */

@injectable()
export default class ${name.charAt(0).toUpperCase()}${name.substring(1)}CreateAdapter<I${name.charAt(0).toUpperCase()}${name.substring(1)}CreateQueryDTO, Promise<I${name.charAt(0).toUpperCase()}${name.substring(1)}CreateResponseDTO>> implements IBaseAdapter {

  constructor() {}

  /**
   * @function execute
   * @param 
   * @returns
   * @memberof IBaseAdapter
   * @throws {Error}
   */
  async execute(${name}CreateQueryDTO: I${name.charAt(0).toUpperCase()}${name.substring(1)}CreateQueryDTO): Promise<I${name.charAt(0).toUpperCase()}${name.substring(1)}CreateResponseDTO> {
  }
}
`)
  
  export default genericAdapterCreateFile