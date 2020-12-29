import Screenshooter from './screenshooter'
import { Page, BinaryScreenShotOptions } from 'puppeteer'
import { ShotOptions } from './types'
import Logger from '../log'

const logger: Logger = Logger.getInstance()

export enum PNGScreenshooterMode {
  FullPage,
  Visible,
  FullSplitPage
}

export type PNGScreenshooterOptions = {
  mode: PNGScreenshooterMode,
}

const DEFAULT_OPTIONS: PNGScreenshooterOptions = {
  mode: PNGScreenshooterMode.FullPage
}

export default class PNGScreenshooter implements Screenshooter {
  constructor(private options: PNGScreenshooterOptions = DEFAULT_OPTIONS){}

  async shot(captureOptions: ShotOptions): Promise<any> {
    const { browser, url, name } = captureOptions
    const { mode } = this.options

    const page: Page = await browser.newPage()

    await page.goto(url)
    const path = `${name}.png`


    // const screenshotModes = {}
    let fullPage = true
    if (mode === PNGScreenshooterMode.FullPage) {
      const params: BinaryScreenShotOptions = {
        path,
        type: 'png',
        fullPage: true,
      }
      await page.screenshot(params)
    } else if (mode === PNGScreenshooterMode.Visible) {
      const params: BinaryScreenShotOptions = {
        path,
        type: 'png',
        fullPage: false,
      }
      await page.screenshot(params)
    } else {
      const innerHeight = await page.evaluate(() => {
        return window.innerHeight
      });
      console.log('innerHeight', innerHeight);

      const windowHeight = await page.evaluate(() => {
        return document.body.scrollHeight
      });
      console.log('windowHeight', windowHeight);

      let heightOffset = 0
      let screenshotNumber = 0
      while(heightOffset < windowHeight) {
        const params: BinaryScreenShotOptions = {
          path: `${name}-${screenshotNumber}.png`,
          type: 'png',
          fullPage: false,
        }
        await page.screenshot(params)

        heightOffset += innerHeight
        screenshotNumber += 1

        await page.evaluate((_heightOffset) => {
          return window.scrollTo(0, _heightOffset)
        }, heightOffset);
      }

    }

    // logger.log('Snapshoting with params %o', params)

    // await page.screenshot(params)
    logger.log('Image snapshot completed!')
  }
}
