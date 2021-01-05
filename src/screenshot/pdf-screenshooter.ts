import Screenshooter from './screenshooter'
import { Page, PDFOptions } from 'puppeteer'
import { ShotOptions } from './types'
import { PaperSize } from '../papersize/papersize'
import { Orientation } from '../papersize/orientation'
import Logger from '../log'

const logger: Logger = Logger.getInstance()

export interface PDFScreenshooterOptions {
  orientation: Orientation
  paperSize: PaperSize
}

const DEFAULT_OPTIONS: PDFScreenshooterOptions = {
  orientation: Orientation.Portrait,
  paperSize: PaperSize.A4,
}

export default class PDFScreenshooter implements Screenshooter {
  constructor(private options: PDFScreenshooterOptions = DEFAULT_OPTIONS) {}

  async shot(captureOptions: ShotOptions): Promise<any> {
    const { browser, url, name } = captureOptions
    const { orientation, paperSize } = this.options

    const page: Page = await browser.newPage()

    await page.goto(url)
    const path = `${name}.pdf`

    const params: PDFOptions = {
      path,
      format: paperSize,
      landscape: orientation === Orientation.Landscape,
    }
    logger.log('Snapshoting with params %o', params)

    await page.pdf(params)
    logger.log('PDF snapshot completed!')
  }
}
