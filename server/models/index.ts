import { Sequelize } from 'sequelize';
import Configs from '../config/config';

const env = process.env.NODE_ENV || 'development';
const config = Configs[env];

const sequelize = new Sequelize(config.database, 'manga', config.password, {
  dialect: config.dialect,
  host: config.host,
});

export default sequelize;
