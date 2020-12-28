import Capturer from './capturer'
import { Browser, Page } from 'puppeteer'
import { CaptureOptions } from './types'

export default class PDFCapturer implements Capturer {
  async capture(captureOptions: CaptureOptions): Promise<any> {
    const { browser, url, name } = captureOptions
    const page: Page = await browser.newPage()

    await page.goto(url);
    const path = `${name}.pdf`
    await page.pdf({ path })
  }
}
