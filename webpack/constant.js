const path = require('path')

const PROJECT_PATH = path.resolve(__dirname, '../')
const PROJECT_NAME = path.parse(PROJECT_PATH).name

const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = 9000

const ANALYZER_HOST = '127.0.0.1'
const ANALYZER_PORT = 8888

const isDev = process.env.NODE_ENV !== 'production'
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  isDev,
  isProd,
  SERVER_HOST,
  SERVER_PORT,
  ANALYZER_HOST,
  ANALYZER_PORT,
}
