import { getPlatform } from './utils'
// --------------------------------- Android /iOS ---------------------------------
import modalTipsA from './android/modalTips.js'
import modalTipsI from './ios/modalTips.js'


// --------------------------------- Android only ---------------------------------
import showToast from './android/toast.js'
import modalConfirm from './android/modalConfirm.js'
import { fn as modalLoading, finishLoading } from './android/modalLoading.js'
import { fn as modalProgress, setProgress } from './android/modalProgress.js'
import writeLocal from './android/writeLocal.js'
import readLocal from './android/readLocal.js'
import scan from './android/scan.js'
import preDial from './android/preDial.js'
import checkNetworkType from './android/checkNetworkType.js'
import takePhoto from './android/takePhoto.js'
import { vibrate, vibrate2 } from './android/vibrate.js'
import getSafeHeights from './android/getSafeHeights.js'
import setScreenHorizontal from './android/setScreenHorizontal.js'
import setScreenPortrait from './android/setScreenPortrait.js'
import notification from './android/notification.js'
import notificationAsync from './android/notificationAsync.js'
import ipConfig from './android/ipConfig.js'
import getDeviceInfo from './android/getDeviceInfo.js'

// 原生平台 alert 提示
async function modalTips(title, content) {
  if (getPlatform() === 'android') {
    return modalTipsA(title, content)
  } else if (getPlatform() === 'ios') {
    return modalTipsI(title, content)
  }
}



export { modalTips }

export { showToast, modalConfirm, modalLoading, finishLoading }
export { modalProgress, setProgress, writeLocal, readLocal, scan, preDial, checkNetworkType }
export { takePhoto, vibrate, vibrate2, getSafeHeights, setScreenHorizontal, setScreenPortrait }
export { notification, notificationAsync, ipConfig, getDeviceInfo }


