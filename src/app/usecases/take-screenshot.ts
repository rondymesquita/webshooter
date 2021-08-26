import { Screenshot } from '@domain/models'
import { ITakeScreenshot } from '@domain/usecases'
import ScreenshooterContext from '@app/screenshot/screenshooterContext'
import ScreenshooterFactory from '@app/screenshot/screenshooterFactory'
import { ShotContextOptions } from '@app/screenshot/types'

export class TakeScreenshot implements ITakeScreenshot {
  constructor() {}
  async takeScreenshot(screenshot: Screenshot) {
    console.log('>>>', screenshot)
    return Promise.resolve()

    // const screenshooter = ScreenshooterFactory.create(this.args)
    // const screenshooterContext = new ScreenshooterContext(screenshooter)
    // await screenshooterContext.init()

    // const params: ShotContextOptions = {
    //   url: this.args.url,
    //   name: this.args.name,
    // }

    // await screenshooterContext.shot(params)
    // await screenshooterContext.close()
  }
}
