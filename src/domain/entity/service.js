import fs from 'fs/promises'

const service = {
  create: async (name, path) => {
    console.log('creating service...', name, path)
  }
}

export default service