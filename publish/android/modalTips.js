import { androidName, chromeErrMsg } from '../global.js'
import { insertCallbackFn } from '../utils.js'

const callbackFnKey = 'modalTipsCallback'

export default function fn(title, content, callback) {
  try {
    // 运行已注册函数
    window[androidName].modalTips(title, content)
    // 抛送回到函数
    insertCallbackFn(callbackFnKey, callback)
  } catch (err) {
    console.error(err, chromeErrMsg)
  }
}
