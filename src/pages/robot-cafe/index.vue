<script setup>
import { ref } from 'vue'
// import imgUrl from './images/底版.jpg'
const imgUrl = new URL('./images/底版.jpg', import.meta.url).href
const aniuimgUrl = new URL('./images/按钮.png', import.meta.url).href

const btn = ref(null);
const isStart = ref(false);


defineProps({
  msg: String,
})

function toggleFullScreen() {
    console.log(isStart.value);
  isStart.value = !isStart.value;
  // if (!document.fullscreenElement) {
  //   // If the document is not in full screen mode
  //   // make the video full screen
  //   btn.value.requestFullscreen();
  // } else {
  //   // Otherwise exit the full screen
  //   if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   }
  // }
}

</script>

<template>
  <div class="fullPage">
    <img class="bg" :src="imgUrl" />
    <img :class="['anniu', {start: isStart}]" :src="aniuimgUrl" @click="toggleFullScreen" />
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
      animation-iteration-count: infinite;
      animation-direction: alternate;
      transform-origin: 80% 80%;
    }
  }
}
</style>
