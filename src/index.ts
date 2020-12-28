import puppeteer from 'puppeteer'
import Screenshooter from './snapshot/snapshooter'
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
  const screenshooter = new Snapshooter(pdfCapturer)
  await screenshooter.init()

  const params: ShotOptions = {
    url: 'https://github.com/rondymesquita',
    name: 'example.portrait'
  }
  await screenshooter.shot(params)
  await screenshooter.close()
})()
