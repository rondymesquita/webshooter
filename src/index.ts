#!/usr/bin/env node

import { Arguments } from './args/types'
import ArgParser from './args/argParser'
import Webshooter from './webShooter'

const args: Arguments = ArgParser.parse(process.argv.slice(2))

const webshooter = new Webshooter(args)
webshooter.shot()
