import Snapshooter from './isnapshooter'
import { Page, PDFOptions } from 'puppeteer'
import { SnapshooterOptions } from '../types'
import { PaperSize } from '../papersize/papersize'
import Logger from '../log'

const logger: Logger = Logger.getInstance()

export type PDFSnapshooterOptions = {
  landscape: boolean,
  paperSize: PaperSize
}

const DEFAULT_OPTIONS: PDFSnapshooterOptions = {
  landscape: false,
  paperSize: PaperSize.A4
}

export default class PDFSnapshooter implements Snapshooter {

  constructor(private options: PDFSnapshooterOptions = DEFAULT_OPTIONS){}

  async shot(captureOptions: SnapshooterOptions): Promise<any> {
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
    logger.log('PDF Snapshot completed!')
  }
}
