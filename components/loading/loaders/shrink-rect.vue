<template>
  <div>
    <div class="spinner" :style="{
      width: size+20+'px',
      height: size+20+'px'
    }">
      <div :style="{ backgroundColor:color }" class="rect1"></div>
      <div :style="{ backgroundColor:color }" class="rect2"></div>
      <div :style="{ backgroundColor:color }" class="rect3"></div>
      <div :style="{ backgroundColor:color }" class="rect4"></div>
      <div :style="{ backgroundColor:color }" class="rect5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShrinkRect',
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
  font-size: 10px;
}

.spinner > div {
  height: 100%;
  width: 12%;
  display: inline-block;
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
 
.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
 
.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
 
.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
 
@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 
  20% { -webkit-transform: scaleY(1.0) }
}
 
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>