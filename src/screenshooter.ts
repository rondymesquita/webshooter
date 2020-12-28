import Capturer from './capturer'
import puppeteer, { Browser } from 'puppeteer'
import { ScreenshotOptions, CaptureOptions } from './types'

export default class Screenshooter {
  private browser: Browser
  constructor(private capturer: Capturer) {
  }

  async init() {
    this.browser = await puppeteer.launch({})
  }

  async close() {
    await this.browser.close();
  }

  async screenshot(screenshotOptions: ScreenshotOptions) {
    const options: CaptureOptions = {
      browser: this.browser,
      url: screenshotOptions.url,
      name: 'example'
    }
    await this.capturer.capture(options)
    console.log('capture done!')
  }
}
