import Screenshooter from './screenshooter'
import { Page, PDFOptions } from 'puppeteer'
import { ShotOptions } from './types'
import { PaperSize } from '../papersize/papersize'
import Logger from '../log'

const logger: Logger = Logger.getInstance()

export type PDFScreenshooterOptions = {
  landscape: boolean,
  paperSize: PaperSize
}

const DEFAULT_OPTIONS: PDFScreenshooterOptions = {
  landscape: false,
  paperSize: PaperSize.A4
}

export default class PDFScreenshooter implements Screenshooter {

  constructor(private options: PDFScreenshooterOptions = DEFAULT_OPTIONS){}

  async shot(captureOptions: ShotOptions): Promise<any> {
    const { browser, url, name } = captureOptions
    const { landscape, paperSize } = this.options

    const page: Page = await browser.newPage()

    await page.goto(url);
    const path = `${name}.pdf`

    const params: PDFOptions = {
      path,
      format: paperSize,
      landscape
    }
    logger.log('Snapshoting with params %o', params)

    await page.pdf(params)
    logger.log('PDF snapshot completed!')
  }
}
