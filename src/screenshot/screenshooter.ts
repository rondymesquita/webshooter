import { ShotOptions } from './types'

export default interface Screenshooter {
    shot(captureOptions: ShotOptions): Promise<any>
}
