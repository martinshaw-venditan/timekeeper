<template>
  <div class='timer_manager' @dragover="receiveOnDragOver">
    <div class="name_input">
      <input type="text"
             v-model="nameInput"
             placeholder="Enter name, then press enter to add task timer"
             @keypress.enter.prevent="submitName"
      />
    </div>
    <div class="timers">
      <Timer v-for="(timer, i) in timers"
             :key="i"
             :index="i"
             :name="timer.name"
             :initial-value="timer.initialValue"
             @deleteTimer="deleteTimer(i)"
      ></Timer>
    </div>
  </div>
</template>

<script>
import Timer from '@/components/Timer.vue'

export default {
  name: 'TimerManager',
  components: {
    Timer
  },
  props: {
  },
  mounted() {
  },
  methods: {
    deleteTimer: function (index) {
      this.timers.splice(index, 1);
    },
    receiveOnDragOver: function (event) {
      console.log(event);
    },
    submitName: function () {
      this.timers.push({
        name: this.nameInput,
        initialValue: 0
      });
      this.nameInput = '';
    }
  },
  watch: {
  },
  computed: {
  },
  data() {
    return {
      nameInput: '',
      timers: []
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.timer_manager {
  display: block;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: #eee;

  .timers {
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    --gap: 12px;
    margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
    width: calc(100% + var(--gap));

    > * {
      margin: var(--gap) 0 0 var(--gap);
    }
  }

  .name_input {
    padding-bottom: 20px;

    input {
      width: 600px;
    }
  }
}
</style>
