export enum Format {
  PDF = 'PDF',
  PNG = 'PNG'
}

export interface Screenshot {
  format: Format
  url: string
  name: string
}
