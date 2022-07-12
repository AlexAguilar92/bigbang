const genericEntityFile = (name) => (`import I${name.charAt(0).toUpperCase()}${name.substring(1)}Domain from '../interface/I${name.charAt(0).toUpperCase()}${name.substring(1)}Domain';

/**
* class ${name.charAt(0).toUpperCase()}${name.substring(1)}Domain
* @extends ${name.charAt(0).toUpperCase()}${name.substring(1)}
* @description 
*/

export default class ${name.charAt(0).toUpperCase()}${name.substring(1)}Domain extends ${name.charAt(0).toUpperCase()}${name.substring(1)} implements I${name.charAt(0).toUpperCase()}${name.substring(1)}Domain {
  
}
`
)

export default genericEntityFile