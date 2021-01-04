#!/usr/bin/env ts-node

import { Arguments } from './args/types'
import ArgParser from './args/argParser'
import Webshooter from './webShooter'


const args:Arguments = ArgParser.parse(process.argv.slice(2))
console.log('>>>args', args);

// const webshooter = new Webshooter(args)
// webshooter.shot()
