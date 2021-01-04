import PDFScreenshooter, {
  PDFScreenshooterOptions,
} from './pdf-screenshooter'
import PNGScreenshooter, {
  PNGScreenshooterOptions,
  PNGScreenshooterMode
} from './png-screenshooter'

export default class ScreenshooterFactory{
  static create(format: string){
    let screenshooter
    if (format==='PNG'){
      screenshooter = new PNGScreenshooter()
    } else {
      screenshooter = new PDFScreenshooter()
    }
    return screenshooter
  }
}
