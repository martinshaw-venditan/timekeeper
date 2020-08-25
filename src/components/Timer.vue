<template>
  <div v-bind:class='{timer: true, "is-running": isRunning}'>
    <div class="info-container">
      <b>{{name}}</b>
      <i>{{formattedValue}}</i>
    </div>
    <div class="button-container">
      <button @click="toggleTimer">{{isRunning ? '⏸️' : '▶️'}}</button>
      <button @click="resetTimer">⏪️</button>
      <button @click="deleteTimer">♻️</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    index: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    initialValue: {
      type: Number,
      required: false,
      default: 0
    }
  },
  mounted() {
    this.value = this.initialValue;
  },
  methods: {
    startTimer: function () {
      this.timer = setInterval(this.tick, 1000 * 60);
    },
    stopTimer: function () {
      clearInterval(this.timer);
      this.timer = null;
    },
    toggleTimer: function () {
      if (this.isRunning) {
        this.stopTimer();
      } else {
        this.startTimer();
      }
    },
    resetTimer: function () {
      this.stopTimer();
      this.value = 0;
    },
    deleteTimer: function () {
      this.stopTimer();
      this.$emit('deleteTimer');
    },
    tick: function () {
      this.value++;
    }
  },
  watch: {
    value: function (newValue) {
      this.formattedValue =
          Math.floor(newValue / 60).toString().padStart(2, '0') + ':' +
          Math.floor(newValue % 60).toString().padStart(2, '0');
    }
  },
  computed: {
    isRunning: function () {
      return this.timer !== null;
    }
  },
  data() {
    return {
      timer: null,
      value: 0,
      formattedValue: '00:00'
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.timer {
  display: flex;
  flex-direction: column;
  border: 1px solid #888;

  .info-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .button-container {
    display: flex;
    padding: 5px 0 0;
    flex: 1;

    button {
      flex: 1;
      width: 100%;
      border-radius: 0;
      border: 1px solid #ccc;
      outline: none;

      &:hover {
        border: 1px solid #aaa;
      }
    }
  }

  &.is-running {
    background: lime;
  }
}
</style>
