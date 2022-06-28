const iRepositoryFile = (name) => (
  `import { IRead, IWrite } from "../..";
  import { ${name.charAt(0).toUpperCase()}${name.substring(1)} } from "../";
  
  export default interface I${name.charAt(0).toUpperCase()}${name.substring(1)}Repository extends IWrite<User>, IRead<User> {
  
  }
  `
  )

  export default iRepositoryFile