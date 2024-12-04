<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <van-uploader v-model="dm" multiple></van-uploader>
    <van-button class="btn" type="primary" block @click="showToast('显示toast.')">Toast</van-button>
    <van-button class="btn" type="primary" block @click="onModalTips">ModalTips</van-button>
    <van-button class="btn" type="primary" block @click="onModalConfirm">ModalConfirm</van-button>
    <van-button class="btn" type="primary" block @click="onModalLoading">ModalLoading</van-button>
    <van-button class="btn" type="primary" block @click="onModalProgress">ModalProgress</van-button>
    <van-button class="btn" type="primary" block @click="writeLocal('damn', 'God damn it!')">WriteLocal</van-button>
    <van-button class="btn" type="primary" block @click="onReadLocal">ReadLocal</van-button>
    <van-button class="btn" type="primary" block @click="onScan">Scan Mix</van-button>
    <van-button class="btn" type="primary" block @click="preDial('18043730725')">Dial Number: 18043730725</van-button>
    <van-button class="btn" type="primary" block @click="onCheckNetworkType">NetWork Type</van-button>
    <van-button class="btn" type="primary" block @click="onTakePhoto">Take Photo</van-button>
    <img alt="." :src="imgSrc" style="width:calc(100vw - 80px);height: auto;" />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { showToast, modalTips, modalConfirm, modalLoading, finishLoading, modalProgress, setProgress } from '$'
import { writeLocal, readLocal, scan, preDial, checkNetworkType, takePhoto } from '$'

const dm = ref()
const imgSrc = ref()

function onModalTips() {
  modalTips('标题', 'ModalTips').then(() => {
    alert("您点击了 modalTips 确定")
  })
}

function onModalConfirm() {
  modalConfirm('标题', 'ModalConfirm').then(() => {
    alert("您点击了 modalConfirm 确定")
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
  })
}

function onScan() {
  scan((res) => {
    alert(res)
  })
}

function onCheckNetworkType() {
  checkNetworkType().then((res) => {
    alert(res)
  })
}

function onTakePhoto() {
  takePhoto().then((base64Str) => {
    alert(base64Str)
    imgSrc.value = base64Str
  })
}














// ---------------------------------------------------

function hell() {
  alert(' Callback function from web !!!!!! ')
}

function hell2() {
  alert('后续动作')
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
