<script>
  import axios from 'axios'

  export default {
    created() {
      axios
        .get(
          'https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&apikey=demo'
        )
        .then((response) => {
          this.lastUpdate = response.data['Meta Data']['5. Last Refreshed']
          const data = response.data['Time Series FX (Daily)']
          const firstKey = Object.keys(data)[0]
          this.dailyValue = data[firstKey]['4. close']
        })

      axios
        .get(
          'https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=EUR&to_symbol=USD&apikey=demo'
        )
        .then((response) => {
          this.fetchValues = [
            {
              date: '2023-01-31',
              from: response.data['Meta Data']['2. From Symbol'],
              to: response.data['Meta Data']['3. To Symbol'],
              id: 'f5954868-a624-11ed-afa1-0242ac120002',
              value:
                response.data['Time Series FX (Monthly)']['2023-01-31'][
                  '4. close'
                ]
            },
            {
              from: response.data['Meta Data']['2. From Symbol'],
              to: response.data['Meta Data']['3. To Symbol'],
              date: '2021-01-29',
              id: 'f595231a-a624-11ed-afa1-0242ac120002',
              value:
                response.data['Time Series FX (Monthly)']['2021-01-29'][
                  '4. close'
                ]
            },
            {
              date: '2021-06-30',
              from: response.data['Meta Data']['2. From Symbol'],
              to: response.data['Meta Data']['3. To Symbol'],
              id: 'f59526da-a624-11ed-afa1-0242ac120002',
              value:
                response.data['Time Series FX (Monthly)']['2021-06-30'][
                  '4. close'
                ]
            },
            {
              date: '2022-01-31',
              from: response.data['Meta Data']['2. From Symbol'],
              to: response.data['Meta Data']['3. To Symbol'],
              id: 'f5952d2e-a624-11ed-afa1-0242ac120002',
              value:
                response.data['Time Series FX (Monthly)']['2022-01-31'][
                  '4. close'
                ]
            },
            {
              date: '2022-06-30',
              from: response.data['Meta Data']['2. From Symbol'],
              to: response.data['Meta Data']['3. To Symbol'],
              id: 'f59538be-a624-11ed-afa1-0242ac120002',
              value:
                response.data['Time Series FX (Monthly)']['2022-06-30'][
                  '4. close'
                ]
            },
            {
              date: '2023-01-31',
              from: response.data['Meta Data']['2. From Symbol'],
              to: response.data['Meta Data']['3. To Symbol'],
              id: 'f5954868-a624-11ed-afa1-0242ac120002',
              value:
                response.data['Time Series FX (Monthly)']['2023-01-31'][
                  '4. close'
                ]
            }
          ]
        })
    },

    data() {
      return {
        dailyValue: '',
        lastUpdate: '',
        fetchValues: [],
        fromValue: '',
        toValue: '',
        name: '',
        lastname: '',
        messageField: 'Ange meddelande',
        emailAdded: false,
        email: ''
      }
    },

    watch: {
      email(newValue) {
        if (newValue.includes('@') && !this.emailAdded) {
          this.email = newValue + 'gmail.com'
          this.emailAdded = true
        }
      }
    }
  }
</script>

<template>
  <div id="background-container">
    <div id="background-container-text">
      <h1>
        {{ this.$store.state.welcomeText }}
      </h1>
      <h2>
        {{ this.$store.state.welcomeTextLower }}
      </h2>
      <div id="btn-container">
        <RouterLink to="/">
          <button id="read-more-btn">Läs mer</button>
        </RouterLink>
        <RouterLink to="/CalculatorMain">
          <button @click="$store.commit('changeMainText')" id="calculate-btn">
            Börja räkna
          </button>
        </RouterLink>
      </div>
    </div>
    <img id="bg-image" alt="" src="/assets/blocks-bg.png" />
  </div>
  <div id="main-container">
    <div id="main-position">
      <h3>Nuvarande valuta (USD till SEK)</h3>
      <h4>Senast uppdaterad</h4>
      <p>{{ lastUpdate }}</p>
      <div id="daily-value-container">
        <h3>Idag står dagens valuta på:</h3>
        <h2 style="font-size: 3rem">{{ dailyValue }} SEK</h2>
      </div>
    </div>
    <div id="current-currency-container">
      <div :key="value.id" v-for="value in fetchValues" id="currency-box">
        <h3>{{ value.date }}</h3>
        <p>En {{ value.from }} detta datum motsvarade följande:</p>
        <h4>{{ value.value }} {{ value.to }}</h4>
      </div>
    </div>
  </div>
  <div id="form-container">
    <div id="form-total">
      <h2>Kom i kontakt med oss!</h2>
      <div id="form-position">
        <div class="form-box">
          <label for="name">Förnamn: *</label>
          <input v-model="name" name="name" class="form-input" />
          <label for="lastname">Efternamn: *</label>
          <input v-model="lastname" name="lastname" class="form-input" />
          <label for="email">Email: *</label>
          <input v-model="email" name="email" class="form-input" />
        </div>
        <div class="form-box">
          <label for="city">Stad:</label>
          <input name="city" class="form-input" />
          <label for="phone">Telefon:</label>
          <input name="phone" class="form-input" />
          <label for="company">Företag:</label>
          <input name="company" class="form-input" />
        </div>
      </div>

      <div id="checkbox-container">
        <h3>Intresse:</h3>
        <div class="checkbox-alt">
          <input type="checkbox" name="stocks" checked />
          <label for="stocks">Aktier</label>
        </div>
        <div class="checkbox-alt">
          <input type="checkbox" name="funds" />
          <label for="funds">Fonder</label>
        </div>
        <div class="checkbox-alt">
          <input type="checkbox" name="indexfunds" />
          <label for="indexfunds">Indexfonder</label>
        </div>
        <div class="checkbox-alt">
          <input type="checkbox" name="metals" />
          <label for="metals">Ädelmetaller</label>
        </div>
        <div class="checkbox-alt">
          <input type="checkbox" name="crypto" />
          <label for="crypto">Kryptovalutor</label>
        </div>
        <div class="checkbox-alt">
          <input type="checkbox" name="properties" />
          <label for="properties">Fastigheter</label>
        </div>
      </div>
      <div id="form-message-container">
        <label for="message">Meddelande:</label>
        <input :placeholder="messageField" class="form-input" />
        <button
          v-if="name.length > 0 && lastname.length > 0 && email.includes('@')"
        >
          Skicka
        </button>
        <p v-else>Fyll i alla obligatoriska fält</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #background-container {
    display: flex;
    justify-content: center;
    height: 700px;
    width: 50%;
    margin-bottom: 120px;
    margin-top: 50px;
  }

  #background-container-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    font-size: 24px;
  }

  #background-container-text h2 {
    font-size: 18px;
  }

  #btn-container {
    margin-top: 30px;
    width: 125%;
  }

  #read-more-btn {
    width: 220px;
    height: 50px;
    border: 2px solid black;
    background-color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin-right: 30px;
  }

  #read-more-btn:hover {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    cursor: pointer;
  }

  #calculate-btn {
    width: 220px;
    height: 50px;
    border: 2px solid black;
    background-color: rgb(0, 0, 0);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin-right: 30px;
    color: #ffffff;
  }

  #calculate-btn:hover {
    background-color: rgb(255, 255, 255);
    color: black;
    cursor: pointer;
  }

  #bg-image {
    position: absolute;
    top: 50;
    left: 60%;
    z-index: -1;
  }

  #main-container {
    margin: 0 auto;
    height: 1100px;
    width: 100%;
    background-color: #020c18;
  }

  #main-position {
    color: white;
    width: 80%;
    margin: 0 auto;
    padding: 60px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  #daily-value-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 12px white;
    margin-top: 25px;
    padding: 25px;
    border-radius: 25px;
  }

  #main-position h3 {
    font-size: 32px;
    padding: 15px;
  }

  #current-currency-container {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 60px auto;
    width: 70%;
    border-radius: 8px;
  }

  #currency-box {
    border: 1px solid rgb(241, 241, 241);
    border-radius: 5px;
    box-shadow: 0px 0px 12px white;
    color: white;
    padding: 25px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    font-size: 2rem;
    margin-bottom: 50px;
  }

  #currency-box h3 {
    font-size: 2.2rem;
    padding: 15px;
  }

  #currency-box p {
    margin-top: 15px;
    font-size: 1rem;
  }

  #currency-box h4 {
    margin-top: 5px;
  }

  #form-container {
    height: 1000px;
    background-color: #020c18;
    color: white;
  }

  #form-total {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
    padding-top: 80px;
  }

  #form-total h2 {
    font-size: 3.5rem;
  }

  #form-position {
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 60px;
  }

  .form-box {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .form-box label {
    margin-top: 20px;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .form-input {
    width: 100%;
    background-color: #020c18;
    border: none;
    border-bottom: 1px solid rgb(255, 255, 255);
    margin-top: 10px;
    padding: 10px;
    color: white;
    border-radius: 0;
  }

  #checkbox-container {
    margin-top: 20px;
    margin-left: -3px;
  }

  #checkbox-container input {
    width: 20px;
    margin-left: 0px;
  }

  .checkbox-alt {
    margin-top: 5px;
  }

  #form-message-container {
    margin-top: 25px;
    font-size: 1.1rem;
    font-weight: 600;
    width: 48%;
  }

  #form-message-container button {
    margin-top: 25px;
    padding: 5px 15px;
    border-radius: 2px;
    background-color: #020c18;
    border: 2px solid rgb(252, 252, 252);
    color: white;
  }

  #form-message-container button:hover {
    cursor: pointer;
  }

  #form-message-container p {
    margin-top: 10px;
  }
  @media (max-width: 1500px) {
    #main-container {
      height: 1400px;
    }
    #bg-image {
      width: 550px;
    }
  }
</style>
