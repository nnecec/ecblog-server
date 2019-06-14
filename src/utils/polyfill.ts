import 'babel-polyfill'
import 'node-fetch'
import 'core-js'
import nodeFetch from 'node-fetch'
if (!(process as IProcess).browser) {
  global['fetch'] = nodeFetch
  global['Headers'] = global['fetch']['Headers']
}

interface IProcess extends NodeJS.Process {
  browser: any
}
