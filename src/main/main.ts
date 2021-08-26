import { Arguments } from './cli/args/types'
import ArgParser from './cli/args/argParser'

const args: Arguments = ArgParser.parse(process.argv.slice(2))
console.log('args')
