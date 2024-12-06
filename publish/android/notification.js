import { androidName, chromeErrMsg } from '../global.js'

export default function fn(id, title, content) {
  try {
    window[androidName].notification(id, title, content)
  } catch (err) {
    console.error(err, chromeErrMsg)
  }
}
