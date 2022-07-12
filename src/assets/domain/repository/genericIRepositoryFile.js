const iRepositoryFile = (name) => (
`import IWrite from '../../../../common/domain/repository/interface/IWrite';
import IRead from '../../../../common/domain/repository/interface/IRead';

import ${name.charAt(0).toUpperCase()}${name.substring(1)} from '../../entity/implementation/${name.charAt(0).toUpperCase()}${name.substring(1)}';

export default interface I${name.charAt(0).toUpperCase()}${name.substring(1)}Repository extends IWrite<${name.charAt(0).toUpperCase()}${name.substring(1)}>, IRead<${name.charAt(0).toUpperCase()}${name.substring(1)}> {}
`
)

export default iRepositoryFile