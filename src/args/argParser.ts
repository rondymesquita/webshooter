import yargs from 'yargs/yargs'
import { Arguments } from './types'

export default class ArgParser {
  static parse(processArgs: ReadonlyArray<string>): Arguments {
    const args: Arguments = yargs(processArgs)
      .option('url', {
        type: 'string',
        demandOption: true,
        description: '',
      })
      .option('format', {
        type: 'string',
        default: 'PDF',
        choices: ['PDF', 'PNG'],
        description: '',
      })
      .option('name', {
        type: 'string',
        default: 'example',
        description: '',
      })
      .option('png-mode', {
        type: 'string',
        default: 'FullPage',
        choices: ['FullPage', 'Visible', 'FullSplitPage'],
        description: '',
      })
      .option('pdf-papersize', {
        type: 'string',
        default: 'A4',
        description: '',
      })
      .option('pdf-orientation', {
        type: 'string',
        default: 'Portrait',
        choices: ['Portrait', 'Landscape'],
        description: '',
      }).argv

      return args
  }
}
