<template>
  <div class="home">
    <TimerManager></TimerManager>
  </div>
</template>

<script>
// @ is an alias to /src
import TimerManager from '@/components/TimerManager.vue'

export default {
  name: 'TaskTimersView',
  components: {
    TimerManager
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
}
</style>
