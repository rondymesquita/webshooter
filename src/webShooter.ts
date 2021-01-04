import { Arguments } from './args/types'
import ScreenshooterContext from './screenshot/screenshooter-context'
import ScreenshooterFactory from './screenshot/screenshooterFactory'
import { ShotContextOptions } from './screenshot/types'

export default class Webshooter {
  private args: Arguments;
  constructor(args: Arguments){
    this.args = args
  }

  async shot(){
    const screenshooter = ScreenshooterFactory.create(this.args.format)
    const screenshooterContext = new ScreenshooterContext(screenshooter)
    await screenshooterContext.init()

    const params: ShotContextOptions = {
      url: this.args.url,
      name: this.args.name,
    }

    await screenshooterContext.shot(params)
    await screenshooterContext.close()
  }
}
