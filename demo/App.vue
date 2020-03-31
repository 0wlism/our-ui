<template>
  <div class="our-h-56 our-w-56 our-bg-blue-400">
    <our-loading spinner='double-cube' isFullScreen active text="loading..." />
  </div>
</template>

<script>
import OurLoading from '../components/loading'

export default {
  components: { OurLoading }
}
</script>
