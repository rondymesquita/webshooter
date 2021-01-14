import PDFScreenshooter, { PDFScreenshooterOptions } from './pdfScreenshooter'
import PNGScreenshooter, {
  PNGScreenshooterOptions,
  PNGScreenshooterMode,
} from './pngScreenshooter'
import { PaperSize } from '../papersize/papersize'
import { Orientation } from '../papersize/orientation'
import { Arguments } from '../args/types'

type ScreenshooterObjects = {
  [prop: string]: any
}

export default class ScreenshooterFactory {
  static createPngScreenshooter(args: Arguments) {
    const { pngMode } = args
    const options: PNGScreenshooterOptions = {
      mode: pngMode as PNGScreenshooterMode,
    }

    return new PNGScreenshooter(options)
  }

  static createPdfScreenshooter(args: Arguments) {
    const { pdfPapersize, pdfOrientation } = args
    const options: PDFScreenshooterOptions = {
      orientation: pdfOrientation as Orientation,
      paperSize: pdfPapersize as PaperSize,
    }
    return new PDFScreenshooter(options)
  }

  static create(args: Arguments) {
    const { format } = args

    const screenshooters: ScreenshooterObjects = {
      PNG: ScreenshooterFactory.createPngScreenshooter,
      PDF: ScreenshooterFactory.createPdfScreenshooter,
    }

    const screenshooter = screenshooters[format](args)
    return screenshooter
  }
}
