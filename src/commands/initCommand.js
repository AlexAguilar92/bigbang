const initRepository = require('../repository/initRepository');

const init = (branch) => {
  initRepository.initFindRepository(branch);
}

module.exports = init