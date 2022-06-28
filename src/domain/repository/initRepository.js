import simpleGit from 'simple-git';
const git = simpleGit();

const initFindRepository = async (name = '') => {
  try {
    await git.clone(
      'https://github.com/fbenitez/serverless-tsc-template.git',
      name,
      { '--branch': 'serverless-2.0' }
    );
    return { result: 0, error: null };
  } catch (error) {
    return { result: 1, error };
  }
  
}

export { initFindRepository };