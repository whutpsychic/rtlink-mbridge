<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <!-- <van-uploader v-model="fileList"></van-uploader> -->
    <van-button class="btn" type="primary" block @click="onShowToast">Toast</van-button>
    <van-button class="btn" type="primary" block @click="onModalTips">ModalTips</van-button>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { showToast, modalTips } from '$'

// const fileList = ref([])

function onShowToast() {
  showToast('显示toast.')
}

function onModalTips() {
  modalTips('标题', '内容', hell)

}

function hell() {
  alert(' Yes !!!!!! ')
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
