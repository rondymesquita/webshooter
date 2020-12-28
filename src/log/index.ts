export default class Logger {
  private static instance: Logger
  private isEnable: boolean;

  private constructor() {}
  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger()
      Logger.instance.isEnable = true
    }
    return Logger.instance;
  }

  log(message?: any, ...optionalParams: any[]){
    if (!this.isEnable) {
        return
    }
    console.log(message, ...optionalParams)
  }
}
