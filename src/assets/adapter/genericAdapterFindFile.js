const genericAdapterFindFile = (name) => (
`import "reflect-metadata";

import { injectable, inject } from "inversify";

import { TYPES } from "../../../../types";

/**
 * @class ${name.charAt(0).toUpperCase()}${name.substring(1)}FindAdapter
 * @implements {IBaseAdapter}
 * @description
 */

@injectable()
export default class ${name.charAt(0).toUpperCase()}${name.substring(1)}FindAdapter<I${name.charAt(0).toUpperCase()}${name.substring(1)}FindRequestDTO, Promise<I${name.charAt(0).toUpperCase()}${name.substring(1)}FindResponseDTO>> implements IBaseAdapter<I${name.charAt(0).toUpperCase()}${name.substring(1)}FindRequestDTO, Promise<I${name.charAt(0).toUpperCase()}${name.substring(1)}FindResponseDTO>> {

constructor() {}

/**
 * @function execute
 * @param 
 * @returns
 * @memberof IBaseAdapter
 * @throws {Error}
 */
async execute(${name}FindQueryDTO: I${name.charAt(0).toUpperCase()}${name.substring(1)}FindQueryDTO): Promise<I${name.charAt(0).toUpperCase()}${name.substring(1)}FindResponseDTO> {
}
}
`)

export default genericAdapterFindFile