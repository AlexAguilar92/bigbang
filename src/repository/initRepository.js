const simpleGit = require('simple-git');
const git = simpleGit();

const initFindRepository = (name = '') => {
  console.log(name)
  git.clone(
    'https://github.com/fbenitez/serverless-tsc-template.git',
    name,
    { '--branch': 'serverless-compose' }
  );
  
}

module.exports = {
  initFindRepository
};