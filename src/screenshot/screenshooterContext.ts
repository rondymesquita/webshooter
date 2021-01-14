import Screenshooter from './screenshooter'
import puppeteer, { Browser } from 'puppeteer'
import { ShotContextOptions, ShotOptions } from './types'
import Logger from '../log'

const logger: Logger = Logger.getInstance()

export default class ScreenshooterContext {
  private browser: Browser
  constructor(private snapshooter: Screenshooter) {
  }

  async init() {
    this.browser = await puppeteer.launch({headless: true})
  }

  async close() {
    await this.browser.close();
  }

  async shot(shotContextOptions: ShotContextOptions) {
    const { url, name } = shotContextOptions

    const options: ShotOptions = {
      browser: this.browser,
      url,
      name
    }

    await this.snapshooter.shot(options)
    logger.log('Snapshot completed!')
  }
}
