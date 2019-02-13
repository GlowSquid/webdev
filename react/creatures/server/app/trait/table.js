const pool = require('../../databasePool');

class TraitTable {
  static getTraitId({ traitType, traitValue }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT id FROM trait WHERE "traitType" = $1 AND "traitValue" = $2',
        [traitType, traitValue],
        (err, resp) => {
          if (err) return reject(err);

          resolve({ traitId: resp.rows[0].id });
        }
      );
    });
  }
}

// TraitTable.getTraitId({ traitType: 'backgroundColor', traitValue: 'blue' })
//   .then(({ traitId }) => console.log('traitId: ', traitId))
//   .catch(error => console.log('error: ', error));

module.exports = TraitTable;
