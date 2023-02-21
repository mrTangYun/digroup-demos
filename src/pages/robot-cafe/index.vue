<script setup>
import { ref, onMounted } from 'vue'
// import imgUrl from './images/底版.jpg'
const imgUrl = new URL('./images/底版.jpg', import.meta.url).href
const aniuimgUrl = new URL('./images/按钮.png', import.meta.url).href

const btn = ref(null);
const isStart = ref(false);
const isFullPage = ref(false);
const fullPage = ref(null);


defineProps({
  msg: String,
})

onMounted(() => {
  btn.value.addEventListener('animationend', (event) => {
    isStart.value = false;
    console.log('animationend');
  });
})

function toggleFullScreen() {
  if (!isFullPage.value) {
    if (!document.fullscreenElement) {
      // If the document is not in full screen mode
      // make the video full screen
      fullPage.value.requestFullscreen();
      isFullPage.value = true;
    }
  }
  isStart.value = !isStart.value;
  
}

</script>

<template>
  <div class="fullPage" ref="fullPage">
    <img class="bg" :src="imgUrl" />
    <img :class="['anniu', {start: isStart}]" :src="aniuimgUrl" @click="toggleFullScreen" ref="btn" />
  </div>
</template>

<style scoped  lang="scss">
.fullPage {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .bg{
    width: 100%;
    height: 100%;
  }
  @keyframes light{
   from{
         opacity: 1;
         transform: scale(1);
     }
     to{
         opacity: 0.5;
         transform: scale(0.9);
     }
 }
  .anniu{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &.start{
      animation-name: light;
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-iteration-count: 2;
      animation-direction: alternate;
      transform-origin: 80% 80%;
    }
  }
}
</style>
