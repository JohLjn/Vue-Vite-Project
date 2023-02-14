<script>
  export default {
    data() {
      return { propsNumberExample: this.propsValue }
    },
    props: {
      propsValue: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<template>
  <div id="footer-container">
    <div id="footer-display">
      <img alt="" src="/assets/lorem-finance.png" />

      <div id="footer-boxes">
        <div class="footer-box">
          <h4>Company</h4>
          <a href="">Om oss</a>
          <a href="">Samarbete</a>
          <a href="">Våran historia</a>
          <a href="">Jobba hos oss</a>
          <a href="">Sedan {{ propsNumberExample }}</a>
        </div>
        <div class="footer-box">
          <h4>Connect</h4>
          <a href="">Instagram</a>
          <a href="">Facebook</a>
          <a href="">Twitter</a>
          <a href="">LinkedIn</a>
          <a href="">Media Indquiries</a>
        </div>
        <div class="footer-box">
          <h4>Partnership</h4>
          <a href="">Avanza</a>
          <a href="">Nordnet</a>
          <a href="">Lysa</a>
          <a href="">Fundler</a>
        </div>
        <div class="footer-box">
          <h4>Lorem Ipsum Finance</h4>
          <a href="">Terms of Use</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #footer-container {
    height: 400px;
    background-color: #ffffff;
    color: rgb(0, 0, 0);
  }

  #footer-display {
    display: flex;
    padding-top: 8rem;
    justify-content: space-around;
  }

  #footer-display img {
    height: 60px;
    width: 139px;
  }

  #footer-boxes {
    display: flex;
    gap: 80px;
  }

  .footer-box {
    display: flex;
    margin: 0;
    flex-direction: column;
    font-size: 0.9rem;
  }

  .footer-box h4 {
    margin-bottom: 10px;
  }

  .footer-box a {
    text-decoration: none;
    color: rgb(29, 28, 28);
    margin-bottom: 10px;
    opacity: 0.9;
  }
</style>
