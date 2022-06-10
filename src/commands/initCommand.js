const initRepository = require('../repository/initRepository');

const init = (name) => {
  initRepository.initFindRepository(name);
}

module.exports = init