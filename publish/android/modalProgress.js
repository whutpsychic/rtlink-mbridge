import { androidName, chromeErrMsg } from '../global.js'
import { insertCallbackFn } from '../utils.js'

const fnKey = `modalProgress`
const callbackFnKey = `${fnKey}Callback`

export function fn(title, callback) {
  try {
    // 运行已注册函数
    window[androidName][fnKey](title)
    // 抛送回调函数
    insertCallbackFn(callbackFnKey, callback)
  } catch (err) {
    console.error(err, chromeErrMsg)
  }
}

export function setProgress(percent) {
  try {
    // 运行已注册函数
    window[androidName].setProgress(percent)
  } catch (err) {
    console.error(err, chromeErrMsg)
  }
}
