//用户的增删改查
import DB from '../db/db.js'
import config from '../config/config'

let dbName=config.dbName;
let tableName='users'
let db=new DB(dbName);
db.createTable(`create table if not exists ${tableName} (id integer,username varchar,passwd varchar)`);

export default db
