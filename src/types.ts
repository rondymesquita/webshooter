import { Browser } from 'puppeteer'

export type ScreenshotOptions = {
    url: string
}

export type CaptureOptions = {
    browser: Browser,
    url: string,
    name: string
}
