import { androidName, chromeErrMsg } from '../global.js'
import { insertCallbackFn } from '../utils.js'

const fnKey = `readLocal`
const callbackFnKey = `${fnKey}Callback`

export default function fn(key, callback) {
  try {
    // 运行已注册函数
    window[androidName][fnKey](key)
    // 抛送回调函数
    insertCallbackFn(callbackFnKey, callback)
  } catch (err) {
    console.error(err, chromeErrMsg)
  }
}
