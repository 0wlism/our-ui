<template>
  <div>
    <div class="spinner" :style="{
      width: size + 110 + 'px',
    }">
      <div :style="{ backgroundColor:color }" class="bounce1"></div>
      <div :style="{ backgroundColor:color }" class="bounce2"></div>
      <div :style="{ backgroundColor:color }" class="bounce3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bounce',
  props: {
    color: String,
    size: Number
  }
}
</script>

<style scoped>
.spinner {
  margin: 25px auto;
  text-align: center;
}
 
.spinner > div {
  width: 30px;
  height: 30px;
 
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
  animation: bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
 
.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
 
.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
 
@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}
 
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>