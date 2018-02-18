require('ts-node/register');
require('dotenv').config({path: './configs/env/.env-' + (process.env.NODE_ENV ? 'development' : process.env.NODE_ENV)});
require('./src/main');
