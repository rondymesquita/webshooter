import PDFSnapshooter, {
  PDFSnapshooterOptions,
} from './snapshot/pdf-snapshooter'
import Snapshooter from './snapshot/snapshooter'
import { PaperSize } from './papersize/papersize'

import { ShotOptions } from './types'
;(async () => {
  const DEFAULT_OPTIONS: PDFSnapshooterOptions = {
    landscape: false,
    paperSize: PaperSize.A4,
  }

  const pdfCapturer = new PDFSnapshooter(DEFAULT_OPTIONS)
  const snapshooter = new Snapshooter(pdfCapturer)
  await snapshooter.init()

  const params: ShotOptions = {
    url: 'https://github.com/rondymesquita',
    name: 'example.portrait'
  }
  await snapshooter.shot(params)
  await snapshooter.close()
})()
