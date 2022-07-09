const genericEntityFile = (name) => (`import { Entity } from 'typeorm';
import BaseEntity from '../../../../common/domain/entity/implementation/BaseEntity';

import I${name.charAt(0).toUpperCase()}${name.substring(1)} from '../interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}';

/**
* class ${name.charAt(0).toUpperCase()}${name.substring(1)}
* @extends BaseEntity
* @memberof I${name.charAt(0).toUpperCase()}${name.substring(1)}
* @description 
*/

@Entity({ schema: 'public' })
export default class ${name.charAt(0).toUpperCase()}${name.substring(1)} extends BaseEntity implements I${name.charAt(0).toUpperCase()}${name.substring(1)} {
  
}
`
)

export default genericEntityFile