<template>
  <div style="width: 100%;height:38px;background-color: purple;"></div>
  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

  <p style="margin:20px 0;"> ========= Android / iOS ========= </p>

  <van-uploader v-model="dm" multiple></van-uploader>
  <!-- <van-uploader v-model="dm" multiple capture="camera"></van-uploader> -->

  <p>{{ done }}</p>
  <p>{{ nope }}</p>
  <p id="msg"></p>

  <van-button class="btn" type="primary" block @click="onModalTips">Native Alert</van-button>
  <van-button class="btn" type="primary" block @click="onModalConfirm">ModalConfirm</van-button>

  <van-button class="btn" type="primary" block @click="onWriteLocal">WriteLocal</van-button>
  <van-button class="btn" type="primary" block @click="onReadLocal">ReadLocal</van-button>
  <van-button class="btn" type="primary" block @click="preDial('18043730725')">Dial Number: 18043730725</van-button>
  <van-button class="btn" type="primary" block @click="onCheckNetworkType">NetWork Type</van-button>
  <van-button class="btn" type="primary" block @click="onGetDeviceInfo">获取设备信息</van-button>
  <van-button class="btn" type="primary" block @click="onGetSafeHeights">Safe Heights</van-button>
  <van-button class="btn" type="primary" block @click="setScreenHorizontal">强制/恢复横屏</van-button>
  <van-button class="btn" type="primary" block @click="setScreenPortrait">强制/恢复竖屏</van-button>

  <van-button class="btn" type="primary" block @click="notification('标题', '通知内容，android杀进程后将失效', 4)">
    通知
  </van-button>
  <van-button class="btn" type="primary" block @click="onTakePhoto">Take Photo</van-button>
  <van-button class="btn" type="primary" block @click="onScan">Scan Mix android bug</van-button>

  <p style="margin:20px 0;"> ========= Android Only ========= </p>

  <van-button class="btn" type="primary" block @click="onModalLoading">ModalLoading</van-button>
  <van-button class="btn" type="primary" block @click="onModalProgress">ModalProgress</van-button>
  <van-button class="btn" type="primary" block @click="vibrate">Vibrate</van-button>
  <van-button class="btn" type="primary" block @click="vibrate2">Vibrate2</van-button>
  <van-button class="btn" type="primary" block @click="showToast('显示toast.')">Toast</van-button>
  <van-button class="btn" type="primary" block @click="ipConfig">IP Config</van-button>

  <img alt="." :src="imgSrc" style="width:calc(100vw - 80px);height: auto;" />

</template>

<script setup>
import { ref } from 'vue'
// =========== Android/iOS ===========
import { modalTips, modalConfirm, writeLocal, readLocal, preDial, checkNetworkType, getDeviceInfo } from '$'
import { getSafeHeights, setScreenHorizontal, setScreenPortrait, notification, takePhoto, scan } from '$'
// =========== Android Only ===========
import { showToast, modalLoading, finishLoading, modalProgress, setProgress } from '$'
import { vibrate, vibrate2 } from '$'
import { ipConfig } from '$'


const dm = ref()
const imgSrc = ref()
const done = ref('')

function onModalTips() {
  modalTips('标题12', 'ModalTips333').then(() => {
    actionDone()
  })
}

function onModalConfirm() {
  modalConfirm('标题', 'ModalConfirm').then((res) => {
    if (res) {
      actionDone()
    } else {
      actionDone('nope')
    }
  })
}

function onWriteLocal() {
  writeLocal('damn', 'God damn itdddd!').then(() => {
    actionDone()
  })
}

function onReadLocal() {
  readLocal('damn').then((res) => {
    modalTips('readLocal', JSON.stringify(res))
    actionDone(res)
  })
}

function onCheckNetworkType() {
  checkNetworkType().then((res) => {
    modalTips('checkNetworkType', JSON.stringify(res))
    actionDone(res)
  })
}

function onGetDeviceInfo() {
  getDeviceInfo().then((res) => {
    modalTips('getDeviceInfo', JSON.stringify(res))
    actionDone()
  })
}

function onGetSafeHeights() {
  getSafeHeights().then((res) => {
    modalTips('getSafeHeights', JSON.stringify(res))
    actionDone()
  })
}

function onTakePhoto() {
  takePhoto().then((base64Str) => {
    imgSrc.value = base64Str
  })
}

function onScan() {
  // scan((res) => {
  //   modalTips('onScan', res)
  //   actionDone()
  // })
  scan().then((res) => {
    modalTips('onScan', res)
    actionDone(res)
  })
}



// ================================================================================================================

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


// ---------------------------------------------------
function actionDone(v) {
  done.value = v ? `${v}` : 'done!'
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
