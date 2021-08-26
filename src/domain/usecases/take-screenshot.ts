import { Screenshot } from '@domain/models'

export interface ITakeScreenshot {
  takeScreenshot: (screenshot: Screenshot) => Promise<void>
}
