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
;(async () => {
  const pdfOptions: PDFScreenshooterOptions = {
    landscape: false,
    paperSize: PaperSize.A4,
  }

  const pngOptions: PNGScreenshooterOptions = {
    mode: PNGScreenshooterMode.FullSplitPage
  }

  //   const pdfScreenshooter = new PDFScreenshooter(pdfOptions)
  const pngScreenshooter = new PNGScreenshooter(pngOptions)
  const snapshooter = new ScreenshooterContext(pngScreenshooter)
  await snapshooter.init()

  const params: ShotContextOptions = {
    // url: 'https://github.com/rondymesquita',
    url: 'https://pt.wikipedia.org/wiki/Lorem_ipsum',
    name: 'example.split',
  }
  await snapshooter.shot(params)
  await snapshooter.close()
})()
