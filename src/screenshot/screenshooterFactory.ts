import PDFScreenshooter, { PDFScreenshooterOptions } from './pdf-screenshooter'
import PNGScreenshooter, {
  PNGScreenshooterOptions,
  PNGScreenshooterMode,
} from './png-screenshooter'
import { PaperSize } from '../papersize/papersize'
import { Orientation } from '../papersize/orientation'
import { Arguments } from '../args/types'

export default class ScreenshooterFactory {
  static create(args: Arguments) {
    const { format, pngMode, pdfPapersize, pdfOrientation } = args
    let screenshooter
    if (format === 'PNG') {
      const options: PNGScreenshooterOptions = {
        mode: pngMode as PNGScreenshooterMode,
      }

      screenshooter = new PNGScreenshooter(options)
    } else {
      const options: PDFScreenshooterOptions = {
        orientation: pdfOrientation as Orientation,
        paperSize: pdfPapersize as PaperSize,
      }
      screenshooter = new PDFScreenshooter(options)
    }
    return screenshooter
  }
}
