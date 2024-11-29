<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <!-- <van-uploader v-model="fileList"></van-uploader> -->
    <van-button class="btn" type="primary" block @click="onShowToast">Toast</van-button>
    <van-button class="btn" type="primary" block @click="onModalTips">ModalTips</van-button>
    <van-button class="btn" type="primary" block @click="onModalConfirm">ModalConfirm</van-button>
    <van-button class="btn" type="primary" block @click="onModalLoading">ModalLoading</van-button>
    <van-button class="btn" type="primary" block @click="onModalProgress">ModalProgress</van-button>
    <van-button class="btn" type="primary" block @click="onWriteLocal">WriteLocal</van-button>
    <van-button class="btn" type="primary" block @click="onReadLocal">ReadLocal</van-button>
    <van-button class="btn" type="primary" block @click="onScan">Scan Mix</van-button>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { showToast, modalTips, modalConfirm, modalLoading, finishLoading, modalProgress, setProgress } from '$'
import { writeLocal, readLocal, scan } from '$'

// const fileList = ref([])

function onShowToast() {
  showToast('显示toast.')
}

function onModalTips() {
  modalTips('标题', '内容', hell)
}

function onModalConfirm() {
  modalConfirm('标题', '内容', hell)
}

function onModalLoading() {
  modalLoading('加载中', '请稍后...', hell)

  setTimeout(() => {
    finishLoading()
  }, 2000)
}

function onModalProgress() {
  modalProgress('正在执行中...', hell)
  setTimeout(() => { setProgress(30) }, 800)
  setTimeout(() => { setProgress(70) }, 1600)
  setTimeout(() => { setProgress(100) }, 2400)
}

function onWriteLocal() {
  writeLocal('damn', 'God damn it!')
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

// ---------------------------------------------------

function hell() {
  alert(' Callback function from web !!!!!! ')
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
