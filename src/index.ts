import puppeteer from 'puppeteer'
import Screenshooter from './snapshot/snapshooter'
import PDFSnapshooter from './snapshot/pdf-snapshooter'
import Snapshooter from './snapshot/snapshooter'

import { ShotOptions } from './types'

;(async () => {
  const pdfCapturer = new PDFSnapshooter()
  const screenshooter = new Snapshooter(pdfCapturer)
  await screenshooter.init()

  const params: ShotOptions = {
      url: 'https://github.com/rondymesquita'
  }
  await screenshooter.shot(params)
  await screenshooter.close()
})()
