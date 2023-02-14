<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap/dist/js/bootstrap.js'

  export default {
    data() {
      return {}
    }
  }
</script>

<template>
  <!-- Grid system used from https://getbootstrap.com/docs/5.1/layout/grid/ -->
  <div class="container">
    <div class="row row-cols-1">
      <div class="col">
        <h1>
          Vi bevittnar utvecklingen av en helt ny generation av finansiella
          tillgångar. För finansiella teknologer representerar denna utveckling
          av den finansiella marknadsinfrastrukturen en karriärmöjlighet som
          bara inträffar en gång. På Talos griper vi denna möjlighet. Vi är en
          sammanhållen men decentraliserad grupp högt erfarna ingenjörer och
          affärsmän baserade i New York, Sverige och runt om i världen. Vi
          bygger på bästa praxis från både traditionella marknader och
          kryptoekosystemet, samt inkorporerar bästa-av-båda-världars expertis i
          en utökbar digital tillgångshandelplattform som gör det möjligt för
          institutionella marknadsdeltagare att smidigt interagera med varandra
          via en enda tillgångspunkt.
        </h1>
      </div>
    </div>
  </div>
  <!-- Grid system used from https://getbootstrap.com/docs/5.1/layout/gutters/ -->
  <div class="container px-4">
    <div class="row gx-5">
      <div class="col">
        <div class="p-3 border bg-light">
          <h3>Ledig Roll</h3>
          <h4>Front-end Utvecklare</h4>
          <p>
            Vi söker nu en tekniskt kunnig frontend utvecklare som har en solid
            grund inom HTML, Javascript, React, Vue och React Native.
          </p>
          <button type="button" class="btn btn-primary">Ansök</button>
        </div>
      </div>
      <div class="col">
        <div class="p-3 border bg-light">
          <h3>Ledig Roll</h3>
          <h4>Full-stack Utvecklare</h4>
          <p>
            Vi söker en motiverad och duktig utvecklare som brinner för att
            leverera hög kvalité både på framsidan och baksidan av digitala
            tjänster.
          </p>
          <button type="button" class="btn btn-primary">Ansök</button>
        </div>
      </div>
      <div class="col">
        <div class="p-3 border bg-light">
          <h3>Ledig Roll</h3>
          <h4>HR Ansvarig</h4>
          <p>
            Har du erfarenhet av och stort intresse för strategiskt HR-arbete?
            Den här tjänsten passar dig med goda ledaregenskaper.
          </p>
          <button type="button" class="btn btn-primary">Ansök</button>
        </div>
      </div>
    </div>
  </div>

  <div>
    <ChildComponent />
  </div>
</template>
<style scoped lang="scss">
  @import '/assets/main.scss';
  $fontsize: 22px;
  h1 {
    font-size: $fontsize;
  }
  .container {
    margin: 80px auto;
    text-align: center;
  }
</style>
