import { Browser } from 'puppeteer'

export type ShotOptions = {
    url: string
}

export type SnapshooterOptions = {
    browser: Browser,
    url: string,
    name: string
}
