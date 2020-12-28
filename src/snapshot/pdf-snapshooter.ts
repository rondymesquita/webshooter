import Snapshooter from './isnapshooter'
import { Page } from 'puppeteer'
import { SnapshooterOptions } from '../types'
import Logger from '../log'

const logger: Logger = Logger.getInstance()

export default class PDFSnapshooter implements Snapshooter {
  async shot(captureOptions: SnapshooterOptions): Promise<any> {
    const { browser, url, name } = captureOptions
    const page: Page = await browser.newPage()

    await page.goto(url);
    const path = `${name}.pdf`
    logger.log('PDF Snapshot completed!')
  }
}
