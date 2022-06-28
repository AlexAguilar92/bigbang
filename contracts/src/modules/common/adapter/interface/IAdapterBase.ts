export default interface IAdapterBase<T, U> {

  /**
   * @function execute
   * @param {T} port
   * @template T, U
   * @description Base Adapter interface
   * @author Alexandro Aguilar
   * @created 2022-06-27
   * @updated 2022-06-27
   * @updatedBy Alexandro Aguilar
   */
  execute(port: T): U
}