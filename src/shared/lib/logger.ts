export const logger = {
  info(message: string, ...args: unknown[]) {
    console.info(`[INFO] ${message}`, ...args)
  },
  error(message: string, ...args: unknown[]) {
    console.error(`[ERROR] ${message}`, ...args)
  },
}
