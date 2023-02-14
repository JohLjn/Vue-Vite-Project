<script>
  import HeaderMain from './components/HeaderMain.vue'
  import FooterMain from './components/FooterMain.vue'

  export default {
    components: {
      HeaderMain,
      FooterMain
    }
  }
</script>

<template>
  <HeaderMain props-value="Lösningar" />
  <main>
    <RouterView />
  </main>
  <FooterMain :props-value="1996" />
</template>

<style>
  body {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
  }
</style>
