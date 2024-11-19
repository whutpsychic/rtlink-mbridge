import { globalRAM } from './global.js'

export function insertCallbackFn(fnKey, fn) {
  // 预设
  if (!window[globalRAM]) window[globalRAM] = {}
  if (!window[globalRAM].callback) window[globalRAM].callback = {}
  window[globalRAM].callback[fnKey] = fn
}
