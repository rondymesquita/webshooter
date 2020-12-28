import { Browser } from 'puppeteer'
import { CaptureOptions } from './types'

export default interface Capturer {
    capture(captureOptions: CaptureOptions): Promise<any>
}
