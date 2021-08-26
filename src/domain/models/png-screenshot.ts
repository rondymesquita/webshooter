import { Screenshot } from './screenshot'

export enum PNGScreenshotMode {
  FullPage = 'FullPage',
  Visible = 'Visible',
  FullSplitPage = 'FullSplitPage',
}

export interface PNGScreenshot extends Screenshot{
  mode: PNGScreenshotMode
}
