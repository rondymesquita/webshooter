import { Screenshot } from './screenshot'
export enum PDFPaperSize{
  A4 = 'A4',
  LETTER = 'Letter'
}

export enum PDFOrientation {
  Landscape = 'Landscape',
  Portrait = 'Portrait',
}

export interface PDFScreenshot extends Screenshot{
  PDFpaperSize: PDFPaperSize
  orientation: PDFOrientation
}
