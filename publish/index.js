import { getPlatform } from './utils'
// --------------------------------- Android /iOS ---------------------------------
import modalTipsA from './android/modalTips.js'
import modalTipsI from './ios/modalTips.js'
import modalConfirmA from './android/modalConfirm.js'
import modalConfirmI from './ios/modalConfirm.js'
import writeLocalA from './android/writeLocal.js'
import writeLocalI from './ios/writeLocal.js'
import readLocalA from './android/readLocal.js'
import readLocalI from './ios/readLocal.js'



// --------------------------------- Android only ---------------------------------
import showToast from './android/toast.js'

import { fn as modalLoading, finishLoading } from './android/modalLoading.js'
import { fn as modalProgress, setProgress } from './android/modalProgress.js'
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

// 原生平台 confirm 确认
async function modalConfirm(title, content) {
  if (getPlatform() === 'android') {
    return modalConfirmA(title, content)
  } else if (getPlatform() === 'ios') {
    return modalConfirmI(title, content)
  }
}

// 原生平台写入本地存储数据
async function writeLocal(title, content) {
  if (getPlatform() === 'android') {
    return writeLocalA(title, content)
  } else if (getPlatform() === 'ios') {
    return writeLocalI(title, content)
  }
}

// 原生平台读取本地存储数据
async function readLocal(key, content) {
  if (getPlatform() === 'android') {
    return readLocalA(key, content)
  } else if (getPlatform() === 'ios') {
    return readLocalI(key, content)
  }
}













export { modalTips, modalConfirm, writeLocal }

export { showToast, modalLoading, finishLoading }
export { modalProgress, setProgress, readLocal, scan, preDial, checkNetworkType }
export { takePhoto, vibrate, vibrate2, getSafeHeights, setScreenHorizontal, setScreenPortrait }
export { notification, notificationAsync, ipConfig, getDeviceInfo }


