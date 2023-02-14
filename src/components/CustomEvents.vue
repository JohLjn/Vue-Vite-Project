<script>
  export default {
    data() {
      return {
        increaseInterestedrate: 7
      }
    },
    methods: {
      changeRate() {
        this.$emit('increase-rate', this.increaseInterestedrate / 100)
      }
    }
  }
</script>

<template>
  <div id="increased-rate-container">
    <h3>Med en årsavkastning på {{ increaseInterestedrate }}%</h3>
    <input
      v-model="increaseInterestedrate"
      @input="changeRate"
      min="0"
      max="20"
      type="range"
    />
  </div>
</template>

<style scoped>
  #increased-rate-container {
    margin-top: 25px;
    border-top: 1px solid rgb(90, 90, 90);
    margin: 25px auto;
  }

  #increased-rate-container h3 {
    margin-top: 25px;
  }

  input {
    width: 100px;
    padding-left: 20px;
    font-size: 16px;
    background-color: rgb(245, 245, 245);
    border: none;
    border-radius: 5px;
  }

  input[type='range'] {
    height: 34px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 50%;
    background-color: #ffffff;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 50%;
    height: 12px;
    cursor: pointer;
    animate: 0.2s;
    background: rgba(96, 236, 103, 0.5);
    border-radius: 5px;
  }
  input[type='range']::-webkit-slider-thumb {
    height: 23px;
    width: 23px;
    border-radius: 23px;
    background: #61cc61;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }

  input[type='range']::-moz-range-track {
    width: 100%;
    height: 12px;
    cursor: pointer;
    animate: 0.2s;
    background: rgba(96, 236, 103, 0.5);
    border-radius: 5px;
  }
  input[type='range']::-moz-range-thumb {
    height: 23px;
    width: 23px;
    border-radius: 23px;
    background: #61cc61;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }
</style>
