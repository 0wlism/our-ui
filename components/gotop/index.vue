<template>
  <transition name="fade">
    <button
      v-show="isShow"
      @click="goTop"
      :style="{
        width: `${right}px`,
        height: `${right}px`,
        right: `${right}px`,
        bottom: `${bottom}px`,
        zIndex: zIndex
      }"
      class="our-fixed our-block focus:our-outline-none">
      <div class="our-center">
        <slot name="default">
          <div>
            <svg
              t="1585735302372" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9495" width="50" height="50">
              <path :fill="color" d="M984.832 513.792 510.848 0.192 509.76 1.28 508.608 0 39.168 505.408 140.352 614.144 515.2 210.432 889.984 616.512Z" p-id="9496"></path>
              <path :fill="color" d="M984.832 921.024 510.848 407.424 509.76 408.512 508.608 407.232 39.168 912.64 140.352 1021.376 515.2 617.664 889.984 1023.808Z" p-id="9497"></path>
            </svg>
          </div>
        </slot>
      </div>
    </button>
  </transition>
</template>

<script>
export default {
  name: 'OurGoTop',
  data () {
    return {
      timer: null,
      isShow: false
    }
  },
  props: {
    width: {
      type: Number,
      default: 12
    },
    height: {
      type: Number,
      default: 12
    },
    right: {
      type: Number,
      default: 50
    },
    bottom: {
      type: Number,
      default: 50
    },
    zIndex: {
      type: Number,
      default: 1000
    },
    color: {
      type: String,
      default: '#000'
    },
    scrollY: {
      type: Number,
      default: 1000
    },
    scrollSpeed: {
      type: Number,
      default: 100
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollAnimate)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollAnimate)
  },
  methods: {
    scrollAnimate () {
      if (window.scrollY >= this.scrollY && this.isShow === false) {
        this.isShow = true
      } else if (window.scrollY < this.scrollY && this.isShow === true) {
        this.isShow = false
      }
    },
    goTop () {
      let self = this
      if (self.timer) {
        cancelAnimationFrame(self.timer);
      }
      self.timer = requestAnimationFrame(function fn(){
        let oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(oTop > 0){
          document.body.scrollTop = document.documentElement.scrollTop = oTop - self.scrollSpeed;
          self.timer = requestAnimationFrame(fn);
        }else{
          cancelAnimationFrame(self.timer);
        }
      })
    }
  }
}
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s all linear
}
</style>
