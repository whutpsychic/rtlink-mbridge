import { androidName, chromeErrMsg } from '../global.js'

export default function fn(id, title, content, seconds) {
  try {
    window[androidName].notification(id, title, content, seconds)
  } catch (err) {
    console.error(err, chromeErrMsg)
  }
}
