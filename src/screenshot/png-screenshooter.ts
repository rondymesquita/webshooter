import Screenshooter from './screenshooter'
import { Page, BinaryScreenShotOptions } from 'puppeteer'
import { ShotOptions } from './types'
import Logger from '../log'

const logger: Logger = Logger.getInstance()

export enum PNGScreenshooterMode {
  FullPage = 'FullPage',
  Visible = 'Visible',
  FullSplitPage = 'FullSplitPage',
}

export interface PNGScreenshooterOptions {
  mode: PNGScreenshooterMode
}

const DEFAULT_OPTIONS: PNGScreenshooterOptions = {
  mode: PNGScreenshooterMode.FullPage,
}

export default class PNGScreenshooter implements Screenshooter {
  constructor(private options: PNGScreenshooterOptions = DEFAULT_OPTIONS) {}

  private async takeShotVisibleArea(page: Page, path: string): Promise<any> {
    const params: BinaryScreenShotOptions = {
      path,
      type: 'png',
      fullPage: false,
    }
    await this.takeShotWithParams(page, params)
  }

  private async takeShotEntirePage(page: Page, path: string): Promise<any> {
    const params: BinaryScreenShotOptions = {
      path,
      type: 'png',
      fullPage: true,
    }
    await this.takeShotWithParams(page, params)
  }

  private async takeShotWithParams(
    page: Page,
    params: BinaryScreenShotOptions,
  ): Promise<any> {
    await page.screenshot(params)
  }

  private async takeShotFullSplitPage(page: Page, name: string) {
    const innerHeight = await page.evaluate(() => {
      return window.innerHeight
    })
    // console.log('innerHeight', innerHeight);

    const windowHeight = await page.evaluate(() => {
      return document.body.scrollHeight
    })
    // console.log('windowHeight', windowHeight);

    let heightOffset = 0
    let screenshotNumber = 0
    while (heightOffset < windowHeight) {
      const params: BinaryScreenShotOptions = {
        path: `${name}-${screenshotNumber}.png`,
        type: 'png',
        fullPage: false,
      }
      await this.takeShotWithParams(page, params)

      heightOffset += innerHeight
      screenshotNumber += 1

      await page.evaluate((_heightOffset) => {
        return window.scrollTo(0, _heightOffset)
      }, heightOffset)
    }
  }

  async shot(captureOptions: ShotOptions): Promise<any> {
    const { browser, url, name } = captureOptions
    const { mode } = this.options

    const page: Page = await browser.newPage()

    await page.goto(url)
    const path = `${name}.png`

    if (mode === PNGScreenshooterMode.FullPage) {
      await this.takeShotEntirePage(page, path)
    } else if (mode === PNGScreenshooterMode.Visible) {
      await this.takeShotVisibleArea(page, path)
    } else {
      await this.takeShotFullSplitPage(page, name)
    }

    // logger.log('Snapshoting with params %o', params)

    // await page.screenshot(params)
    logger.log('Image snapshot completed!')
  }
}
