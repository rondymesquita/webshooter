import { ScreenshooterOptions } from './types'

export default interface Screenshooter {
    shot(captureOptions: ScreenshooterOptions): Promise<any>
}
