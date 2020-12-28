import { SnapshooterOptions } from '../types'

export default interface ISnapshooter {
    shot(captureOptions: SnapshooterOptions): Promise<any>
}
