const genericIEntityFile = (name) => (
  `export default interface I${name.charAt(0).toUpperCase()}${name.substring(1)}Domain {}`
)

export default genericIEntityFile