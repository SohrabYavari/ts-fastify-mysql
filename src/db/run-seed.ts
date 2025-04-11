// import data from './data/index'
import seed from './seed';
import db from '../server/connection'

const runSeed = async () => {
  await seed();
    return db.end();
};

runSeed();
