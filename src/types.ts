import { Browser } from 'puppeteer'

export type ShotOptions = {
    url: string,
    name: string
}

export type SnapshooterOptions = {
    browser: Browser,
    url: string,
    name: string
}
