import ISnapshooter from './isnapshooter'
import puppeteer, { Browser } from 'puppeteer'
import { ShotOptions, SnapshooterOptions } from '../types'
import Logger from '../log'

const logger: Logger = Logger.getInstance()

export default class Snapshooter {
  private browser: Browser
  constructor(private snapshooter: ISnapshooter) {
  }

  async init() {
    this.browser = await puppeteer.launch({})
  }

  async close() {
    await this.browser.close();
  }

  async shot(screenshotOptions: ShotOptions) {
    const options: SnapshooterOptions = {
      browser: this.browser,
      url: screenshotOptions.url,
      name: 'example'
    }
    await this.snapshooter.shot(options)
    logger.log('Snapshot completed!')
  }
}
