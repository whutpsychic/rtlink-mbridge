<template>
  <div style="width: 100%;height:38px;background-color: purple;"></div>
  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  <van-uploader v-model="dm" multiple></van-uploader>

  <p>{{ done }}</p>
  <p>{{ nope }}</p>
  <p id="msg"></p>

  <van-button class="btn" type="primary" block @click="test">test</van-button>

  <van-button class="btn" type="primary" block @click="onModalTips">Native Alert</van-button>
  <van-button class="btn" type="primary" block @click="onModalConfirm">ModalConfirm</van-button>
  <van-button class="btn" type="primary" block @click="onModalLoading">ModalLoading</van-button>
  <van-button class="btn" type="primary" block @click="onModalProgress">ModalProgress</van-button>
  <van-button class="btn" type="primary" block @click="writeLocal('damn', 'God damn it!')">WriteLocal</van-button>
  <van-button class="btn" type="primary" block @click="onReadLocal">ReadLocal</van-button>
  <van-button class="btn" type="primary" block @click="onScan">Scan Mix</van-button>
  <van-button class="btn" type="primary" block @click="preDial('18043730725')">Dial Number: 18043730725</van-button>
  <van-button class="btn" type="primary" block @click="onCheckNetworkType">NetWork Type</van-button>
  <van-button class="btn" type="primary" block @click="onTakePhoto">Take Photo</van-button>
  <van-button class="btn" type="primary" block @click="vibrate">Vibrate</van-button>
  <van-button class="btn" type="primary" block @click="vibrate2">Vibrate2</van-button>
  <van-button class="btn" type="primary" block @click="onGetSafeTop">Safe Top</van-button>
  <van-button class="btn" type="primary" block @click="setScreenHorizontal">强制/恢复横屏</van-button>
  <van-button class="btn" type="primary" block @click="setScreenPortrait">强制/恢复竖屏</van-button>
  <van-button class="btn" type="primary" block @click="notification(1, '标题', '通知内容')">通知</van-button>
  <van-button class="btn" type="primary" block @click="notificationAsync(2, '标题', '通知内容2，杀进程后将失效', 4)">延迟通知</van-button>
  <van-button class="btn" type="primary" block @click="ipConfig">IP Config</van-button>
  <van-button class="btn" type="primary" block @click="onGetDeviceInfo">获取设备信息</van-button>
  <van-button class="btn" type="primary" block @click="showToast('显示toast.')">Toast</van-button>

  <img alt="." :src="imgSrc" style="width:calc(100vw - 80px);height: auto;" />
</template>

<script setup>
import { ref } from 'vue'
// 
import { modalTips } from '$'
// ================================================================================================================
import { showToast, modalConfirm, modalLoading, finishLoading, modalProgress, setProgress } from '$'
import { writeLocal, readLocal, scan, preDial, checkNetworkType, takePhoto, vibrate, vibrate2, getSafeHeights } from '$'
import { setScreenHorizontal, setScreenPortrait, notification, notificationAsync, ipConfig, getDeviceInfo } from '$'

// import modalTips2 from '$/ios/modalTips.js'
const dm = ref()
const imgSrc = ref()
const done = ref('')
const nope = ref('')

async function test() {
  modalTips('标题33', 'ModalTips636').then(() => {
    // alert("您点击了 modalTips 确定")
    actionDone()
  })
  // alert(window.RTMB.platform)
  return
  try {
    let reply = await window.webkit.messageHandlers['modalTips'].postMessage('asdasdasdasdasdsdax')
    alert(reply)
  } catch (err) {
    alert(err)
    console.error(err)
  }
}

function onModalTips() {
  modalTips('标题12', 'ModalTips333').then(() => {
    // alert("您点击了 modalTips 确定")
    actionDone()
  })
}

// ================================================================================================================

function onModalConfirm() {
  modalConfirm('标题', 'ModalConfirm').then(() => {
    confirm("您点击了 modalConfirm 确定")
    actionDone()
  })
}

function onModalLoading() {
  modalLoading('加载中', '请稍后...')

  setTimeout(() => {
    finishLoading().then(() => setTimeout(hell, 300))
  }, 2000)
}

function onModalProgress() {
  modalProgress('正在执行中...')
  setTimeout(() => { setProgress(30) }, 800)
  setTimeout(() => { setProgress(70) }, 1600)
  setTimeout(() => {
    setProgress(100)
  }, 2400)

  setTimeout(hell2, 3000)
}

function onReadLocal() {
  readLocal('damn', (res) => {
    alert(res)
    actionDone()
  })
}

function onScan() {
  scan((res) => {
    alert(res)
    actionDone()
  })
}

function onCheckNetworkType() {
  checkNetworkType().then((res) => {
    alert(res)
    actionDone()
  })
}

function onTakePhoto() {
  takePhoto().then((base64Str) => {
    alert(base64Str)
    imgSrc.value = base64Str
    actionDone()
  })
}

function onGetSafeTop() {
  getSafeHeights().then((res) => {
    alert(JSON.stringify(res))
    // alert(res)
    actionDone()
  })
}

function onGetDeviceInfo() {
  getDeviceInfo().then((res) => {
    alert(JSON.stringify(res))
    actionDone()
  })
}



// ---------------------------------------------------
function actionDone() {
  done.value = 'done!'
  setTimeout(() => {
    done.value = ''
  }, 2000);
}

function hell() {
  alert(' Callback function from web !!!!!! ')
  actionDone()
}

function hell2() {
  alert('后续动作')
  actionDone()
}

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.btn {
  margin-bottom: 1em;
}
</style>
