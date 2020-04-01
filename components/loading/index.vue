<template>
  <transition name="fade">
    <div
      v-show="isActive"
      :class="{ 'our-full-screen': isFullScreen }"
      class=" our-absolute our-left-0 our-right-0 our-top-0 our-bottom-0
              our-z-high our-transition-opacity our-duration-300"
      :style="{ backgroundColor }"
      ref="mask"
    >
      <div class="our-self-heart">
        <slot name="default">
          <component
            :is="spinner"
            :color="color"
            :size="size"
          />
        </slot>
        <div
          v-if="text.length"
          :style="{ color, ...textStyle }"
        >
          {{ text }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Loaders from './loaders'

export default {
  name: 'OurLoading',
  components: Loaders,
  props: {
    active: Boolean,
    spinner: {
      type: String,
      default: 'loop'
    },
    text: {
      type: String,
      default: ''
    },
    textStyle: {
      type: Object,
      default: function () {
        return {}
      }
    },
    color: {
      type: String,
      default: '#000'
    },
    isFullScreen: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: 'rgba(255, 255, 255, .9)'
    },
    size: {
      type: Number,
      default: 40
    }
  },
  data () {
    return {
      isActive: this.active || false
    }
  },
  mounted () {
    this.$refs.mask.parentNode.classList.add('our-loading-mask-parent')
  },
  watch: {
    active (value) {
      this.isActive = value
      if (value) {
        this.$refs.mask.parentNode.classList.add('our-loading-mask-parent')
      }
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<style>
.our-loading-mask-parent {
  position: relative !important;
}
</style>
