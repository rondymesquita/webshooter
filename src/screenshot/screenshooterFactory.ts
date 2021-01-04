import PDFScreenshooter, {
  PDFScreenshooterOptions,
} from './pdf-screenshooter'
import PNGScreenshooter, {
  PNGScreenshooterOptions,
  PNGScreenshooterMode
} from './png-screenshooter'

import { Arguments } from '../args/types'

export default class ScreenshooterFactory{
  static create(args: Arguments){
    const { format } = args
    let screenshooter
    if (format==='PNG'){
      const { pngMode } = args

      const options: PNGScreenshooterOptions = {
        mode: PNGScreenshooterMode[pngMode as keyof typeof PNGScreenshooterMode]
      }

      screenshooter = new PNGScreenshooter(options)
    } else {
      screenshooter = new PDFScreenshooter()
    }
    return screenshooter
  }
}
