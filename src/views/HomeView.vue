<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <!-- <van-uploader v-model="fileList"></van-uploader> -->
    <van-button type="primary" block @click="onShowToast">Toast</van-button>



  </header>
</template>

<script setup>
import { ref } from 'vue'
import { showToast } from '$'

// const fileList = ref([])

function onShowToast() {
  showToast('显示toast.')
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
</style>
