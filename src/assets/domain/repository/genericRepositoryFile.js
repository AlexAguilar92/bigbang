const repositoryFile = (name) => (`import "reflect-metadata";
import { inject, injectable } from "inversify";
import { EntityRepository } from "typeorm";

import { TYPES } from '../../../../../types';
import IDBConnectionManager from '../../../../../shared/database/interface/IDBConnectionManager';
import BaseRepository from '../../../../common/domain/repository/implementation/BaseRepository';

import ${name.charAt(0).toUpperCase()}${name.substring(1)} from '../../entity/implementation/${name.charAt(0).toUpperCase()}${name.substring(1)}';
import I${name.charAt(0).toUpperCase()}${name.substring(1)}Repository from '../interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}Repository';

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