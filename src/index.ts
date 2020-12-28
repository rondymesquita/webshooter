import puppeteer from 'puppeteer'
import Screenshooter from './screenshooter'
import PDFCapturer from './pdf-capturer'

import { ScreenshotOptions } from './types'

;(async () => {
  const pdfCapturer = new PDFCapturer()
  const screenshooter = new Screenshooter(pdfCapturer)
  await screenshooter.init()

  const params: ScreenshotOptions = {
      url: 'https://github.com/rondymesquita'
  }
  await screenshooter.screenshot(params)
  await screenshooter.close()
})()
