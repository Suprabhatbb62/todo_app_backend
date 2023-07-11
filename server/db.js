const { Pool } = require('pg');

const pool = new Pool({
  user: 'perntodo_oau1_user',
  password: 'P0iWZ3WmG2OF9enGM3RjyQmRDD2NjThI',
  host: 'dpg-cilsvlp5rnuvtgr5i1r0-a',
  port: 5432,
  database: 'perntodo_oau1',
});

module.exports = pool;
