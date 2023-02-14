<script>
  export default {
    data() {
      return {
        propsExample: this.propsValue,
        error: true
      }
    },
    props: {
      propsValue: {
        type: String,
        default: 'Default value'
      }
    }
  }
</script>

<template>
  <div id="header-container">
    <RouterLink to="/">
      <img class="logo-image" alt="" src="/assets/lorem-finance.png" />
    </RouterLink>
    <ul>
      <li>{{ propsExample }}</li>
      <RouterLink to="/About/Main/Page">
        <li>Om oss</li>
      </RouterLink>
      <li>Jobba hos oss</li>
      <RouterLink to="/CalculatorMain">
        <li @click="$store.commit('changeMainText')">Kalkylator</li>
      </RouterLink>
    </ul>
  </div>
</template>

<style scoped>
  #header-container {
    display: flex;
    align-items: center;
    border-top: 50px solid black;
    padding-top: 25px;
  }

  .logo-image {
    margin-left: 50px;
  }

  ul {
    display: flex;
    gap: 30px;
    margin-left: auto;
    margin-right: 60px;
    font-size: 18px;
    font-weight: 400;
    list-style: none;
  }
</style>
