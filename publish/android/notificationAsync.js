import { androidName, chromeErrMsg } from '../global.js'

export default function fn(id, title, content, seconds) {
  try {
    window[androidName].notificationAsync(id, title, content, seconds)
  } catch (err) {
    console.error(err, chromeErrMsg)
  }
}
