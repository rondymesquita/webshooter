import PDFScreenshooter, {
  PDFScreenshooterOptions,
} from './screenshot/pdf-screenshooter'
import PNGScreenshooter, {
  PNGScreenshooterOptions,
  PNGScreenshooterMode
} from './screenshot/png-screenshooter'
import ScreenshooterContext from './screenshot/screenshooter-context'
import { PaperSize } from './papersize/papersize'

import { ShotContextOptions } from './screenshot/types'
// ;(async () => {
//   const pdfOptions: PDFScreenshooterOptions = {
//     landscape: false,
//     paperSize: PaperSize.A4,
//   }

//   const pngOptions: PNGScreenshooterOptions = {
//     mode: PNGScreenshooterMode.FullSplitPage
//   }

//   //   const pdfScreenshooter = new PDFScreenshooter(pdfOptions)
//   const pngScreenshooter = new PNGScreenshooter(pngOptions)
//   const snapshooter = new ScreenshooterContext(pngScreenshooter)
//   await snapshooter.init()

//   const params: ShotContextOptions = {
//     // url: 'https://github.com/rondymesquita',
//     url: 'https://pt.wikipedia.org/wiki/Lorem_ipsum',
//     name: 'example.split',
//   }
//   await snapshooter.shot(params)
//   await snapshooter.close()
// })()
// #!/usr/bin/env node

import yargs from 'yargs/yargs'

interface Arguments{
  format: string
  name: string
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

class ScreenshooterFactory{
  static create(format: string){
    let screenshooter
    if (format==='PNG'){
      screenshooter = new PNGScreenshooter()
    } else {
      screenshooter = new PDFScreenshooter()
    }
    return screenshooter
  }
}

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
      url: 'https://pt.wikipedia.org/wiki/Lorem_ipsum',
      name: args.name,
    }

    await screenshooterContext.shot(params)
    await screenshooterContext.close()
  }


}

// const webshooter = new Webshooter(args)
// webshooter.shot()

// console.log('>>>args', args);



