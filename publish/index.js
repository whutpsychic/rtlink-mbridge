import showToast from './android/toast.js'
import modalTips from './android/modalTips.js'
import modalConfirm from './android/modalConfirm.js'
import { fn as modalLoading, finishLoading } from './android/modalLoading.js'
import { fn as modalProgress, setProgress } from './android/modalProgress.js'
import writeLocal from './android/writeLocal.js'
import readLocal from './android/readLocal.js'
import scan from './android/scan.js'
import preDial from './android/preDial.js'
import checkNetworkType from './android/checkNetworkType.js'

export { showToast, modalTips, modalConfirm, modalLoading, finishLoading }
export { modalProgress, setProgress, writeLocal, readLocal, scan, preDial, checkNetworkType }
