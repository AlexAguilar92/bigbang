const repositoryFile = (name) => (
  `import "reflect-metadata";
  import { inject, injectable } from "inversify";
  import { BaseRepository, IUserRepository } from "../..";
  import { User } from "../";
  import IDBConnectionManager from "../../../shared/database/interface/IDBConnectionManager";
  import TYPES from "../../../types";
  import { EntityRepository } from "typeorm";
  
  @injectable()
  @EntityRepository(${name.charAt(0).toUpperCase()}${name.substring(1)})
  export default class ${name.charAt(0).toUpperCase()}${name.substring(1)}Repository extends BaseRepository<${name.charAt(0).toUpperCase()}${name.substring(1)}> implements I${name.charAt(0).toUpperCase()}${name.substring(1)}Repository {
    constructor(
      @inject(TYPES.DBConnectionManager) iDBConnectionManager: IDBConnectionManager,
    ) {
      super(${name.charAt(0).toUpperCase()}${name.substring(1)}, iDBConnectionManager);
    }
  }`)

  export default repositoryFile