import PDFScreenshooter, {
  PDFScreenshooterOptions,
} from './screenshot/pdf-screenshooter'
import PNGScreenshooter, {
  PNGScreenshooterOptions,
  PNGScreenshooterMode
} from './screenshot/png-screenshooter'
import ScreenshooterContext from './screenshot/screenshooter-context'
import ScreenshooterFactory from './screenshot/screenshooterFactory'
import { PaperSize } from './papersize/papersize'

import { ShotContextOptions } from './screenshot/types'
// #!/usr/bin/env node

import yargs from 'yargs/yargs'

interface Arguments{
  format: string
  name: string
  url: string
}

const args:Arguments = yargs(process.argv.slice(2))
  .option('url', {
    type: 'string',
    demandOption: true,
    description: ''
  })
  .option('format', {
    type: 'string',
    default: 'PDF',
    choices: ['PDF', 'PNG'],
    description: ''
  })
  .option('name', {
    type: 'string',
    default: 'example',
    description: ''
  })
  .option('png-mode', {
    type: 'string',
    default: 'FullPage',
    choices: ['FullPage', 'Visible', 'FullSplitPage'],
    description: ''
  })
  .option('pdf-papersize', {
    type: 'string',
    default: 'A4',
    description: ''
  })
  .option('pdf-orientation', {
    type: 'string',
    default: 'Portrait',
    choices: ['Portrait', 'Landscape'],
    description: ''
  })
  .argv

class Webshooter {
  private args: Arguments;
  constructor(args: Arguments){
    this.args = args
  }

  async shot(){
    const screenshooter = ScreenshooterFactory.create(args.format)
    const screenshooterContext = new ScreenshooterContext(screenshooter)
    await screenshooterContext.init()

    const params: ShotContextOptions = {
      url: args.url,
      name: args.name,
    }

    await screenshooterContext.shot(params)
    await screenshooterContext.close()
  }


}

const webshooter = new Webshooter(args)
webshooter.shot()

console.log('>>>args', args);
