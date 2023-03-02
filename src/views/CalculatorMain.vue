<script>
  import ChildComponent from '../components/CustomEvents.vue'

  export default {
    components: {
      ChildComponent
    },

    data() {
      return {
        startValue: 20000,
        timeSaving: 10,
        monthlySaving: 1000,
        futureValue: new Intl.NumberFormat('sv-SE').format(213278),
        newFutureValue: new Intl.NumberFormat('sv-SE').format(213278),
        convertedValue: '',
        interestRate: 0.07,
        valueFromParent: 0
      }
    },

    computed: {
      currencyValue: {
        get() {
          return `${this.startValue} kr`
        },

        set(startValue) {
          if (startValue.endsWith(' kr')) {
            const maybeNumber = startValue.substring(0, startValue.length - 3)
            if (!isNaN(maybeNumber)) {
              this.startValue = Number(maybeNumber)
              return
            }
          }

          this.$refs.currency.startValue = this.currencyValue
        }
      },

      yearsValue: {
        get() {
          return `${this.timeSaving} år`
        },

        set(timeSaving) {
          if (timeSaving.endsWith(' år')) {
            const maybeNumber = timeSaving.substring(0, timeSaving.length - 3)

            if (!isNaN(maybeNumber)) {
              this.timeSaving = Number(maybeNumber)
              return
            }
          }
          this.$refs.currency.timeSaving = this.currencyValue
        }
      },

      currencyValueMonthly: {
        get() {
          return `${this.monthlySaving} kr`
        },

        set(monthlySaving) {
          if (monthlySaving.endsWith(' kr')) {
            const maybeNumber = monthlySaving.substring(
              0,
              monthlySaving.length - 3
            )

            if (!isNaN(maybeNumber)) {
              this.monthlySaving = Number(maybeNumber)
              return
            }
          }
          this.$refs.currencyMonthly.monthlySaving = this.currencyValue
        }
      }
    },
    methods: {
      calculator() {
        this.futureValue =
          this.startValue *
          Math.pow(1 + this.interestRate / 12, this.timeSaving * 12)
        this.futureValue = new Intl.NumberFormat('sv-SE').format(
          Math.trunc(
            this.futureValue +
              (this.monthlySaving *
                (Math.pow(1 + this.interestRate / 12, this.timeSaving * 12) -
                  1)) /
                (this.interestRate / 12)
          )
        )
      },
      increaseRate(increaseInterestedrate) {
        this.newFutureValue =
          this.startValue *
          Math.pow(1 + increaseInterestedrate / 12, this.timeSaving * 12)
        this.newfutureValue = new Intl.NumberFormat('sv-SE').format(
          Math.trunc(
            this.newfutureValue +
              (this.monthlySaving *
                (Math.pow(
                  1 + increaseInterestedrate / 12,
                  this.timeSaving * 12
                ) -
                  1)) /
                (increaseInterestedrate / 12)
          )
        )
      }
    }
  }
</script>

<template>
  <div id="calculate-container">
    <h1 id="header-title">Ränta-på-ränta kalkylator</h1>
    <p>Uträkningen är beräknad på en årsavkastning om cirka 7%.</p>
    <div id="input-container">
      <label>Startvärde</label>
      <div id="input-container-evaluate">
        <input ref="currency" v-model="currencyValue" @input="calculator" />
        <input
          v-model="startValue"
          type="range"
          min="0"
          max="1000000"
          @input="calculator"
        />
      </div>
      <label>Tid</label>
      <div id="input-container-evaluate">
        <input v-model="yearsValue" @input="calculator" />
        <input
          v-model="timeSaving"
          type="range"
          min="0"
          max="100"
          @input="calculator"
        />
      </div>
      <label>Månadssparande</label>
      <div id="input-container-evaluate">
        <input
          ref="currencyMonthly"
          v-model="currencyValueMonthly"
          @input="calculator"
        />
        <input
          v-model="monthlySaving"
          type="range"
          min="0"
          max="50000"
          @input="calculator"
        />
      </div>
    </div>
    <div id="result-container">
      <h3>
        Resultatet hade genererat dig följande efter {{ timeSaving }} år av
        sparande:
      </h3>
      <h3 id="sum-value">{{ futureValue }} kr</h3>
      <ChildComponent @increase-rate="increaseRate" />
      <h3>Så hade du istället fått:</h3>
      <h2>{{ newFutureValue }} kr</h2>
      <p style="font-style: italic">(Krånglar lite med custom events)</p>
    </div>
  </div>
</template>

<style scoped>
  #calculate-container {
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    padding-top: 40px;
    padding-bottom: 100px;
    box-shadow: 0px 0px 12px black;
    border-radius: 15px;
    width: 60%;
    margin: 30px auto;
  }

  #header-title {
    text-align: center;
    margin: 0;
    margin-top: 50px;
  }

  #calculate-container p {
    text-align: center;
    font-style: italic;
    margin-top: 10px;
  }

  #input-container {
    display: flex;
    width: 70%;
    margin: 30px auto;
    flex-direction: column;
  }

  #calculate-container label {
    margin: 15px 0 10px 0;
    font-size: 22px;
  }

  input {
    width: 200px;
    padding-left: 20px;
    font-size: 16px;
    background-color: rgb(245, 245, 245);
    border: none;
    border-radius: 5px;
  }

  input[type='range'] {
    height: 34px;
    margin: 10px 0;
    width: 100%;
    background-color: #ffffff;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 12px;
    cursor: pointer;
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
    background: rgba(96, 236, 103, 0.5);
    border-radius: 5px;
  }
  input[type='range']::-moz-range-thumb {
    height: 23px;
    width: 23px;
    border-radius: 23px;
    background: #61cc61;
    cursor: pointer;
    margin-top: -7px;
  }

  #input-container-evaluate {
    display: flex;
    gap: 30px;
  }

  #result-container {
    text-align: center;
    margin-top: 60px;
    width: 50%;
    margin: 0 auto;
    border-bottom: 1px solid rgb(90, 90, 90);
  }

  #result-container h2 {
    font-size: 3rem;
    margin-bottom: 25px;
  }

  #sum-value {
    font-size: 3rem;
    margin: 0;
  }
</style>
