import { Browser } from 'puppeteer'

export interface ShotOptions {
  browser: Browser
  url: string
  name: string
}

export interface ShotContextOptions {
  url: string
  name: string
}
