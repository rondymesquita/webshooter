import PDFScreenshooter, {
  PDFSnapshooterOptions,
} from './screenshot/pdf-screenshooter'
import ScreenshooterContext from './screenshot/screenshooter-context'
import { PaperSize } from './papersize/papersize'

import { ShotOptions } from './screenshot/types'
;(async () => {
  const DEFAULT_OPTIONS: PDFSnapshooterOptions = {
    landscape: false,
    paperSize: PaperSize.A4,
  }

  const pdfCapturer = new PDFScreenshooter(DEFAULT_OPTIONS)
  const snapshooter = new ScreenshooterContext(pdfCapturer)
  await snapshooter.init()

  const params: ShotOptions = {
    url: 'https://github.com/rondymesquita',
    name: 'example.portrait'
  }
  await snapshooter.shot(params)
  await snapshooter.close()
})()
