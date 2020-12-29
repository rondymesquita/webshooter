import Screenshooter from './screenshooter'
import puppeteer, { Browser } from 'puppeteer'
import { ShotOptions, ScreenshooterOptions } from './types'
import Logger from '../log'

const logger: Logger = Logger.getInstance()

export default class ScreenshooterContext {
  private browser: Browser
  constructor(private snapshooter: Screenshooter) {
  }

  async init() {
    this.browser = await puppeteer.launch({})
  }

  async close() {
    await this.browser.close();
  }

  async shot(screenshotOptions: ShotOptions) {
    const options: ScreenshooterOptions = {
      browser: this.browser,
      url: screenshotOptions.url,
      name: screenshotOptions.name
    }
    await this.snapshooter.shot(options)
    logger.log('Snapshot completed!')
  }
}
