<template>
  <section class="section center">
    <div class="container">
      <div class="center-column">
        <h3 class="subtitle">HELLO, WORLD.</h3>
        <h1 class="title">I'm Taakuuyaa.</h1>
        <p class="occupation"><span>WEB DEVELOPER</span></p>
        <button>
          LEARN MORE
          <font-awesome-icon
            :icon="['fas', 'angle-double-down']"
            class="fa-1x"
          />
        </button>
      </div>
    </div>
    <a href="#test"><span></span></a>
  </section>
</template>

<script>
export default {
  name: 'TopIntro',
}
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.center-column {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.section {
  background: #000022 url('~assets/image/circuit.svg');
  height: 100%;
  .container {
    .title,
    .occupation {
      color: #fff;
    }
    .subtitle {
      color: $focus_color;
      margin-bottom: 0.3rem;
      letter-spacing: 0.3rem;
      font-family: 'Lato', sans-serif;
      font-size: 1rem;
    }
    .title {
      max-width: 900px;
      color: #fff;
      font-size: 2.5rem;
      font-family: 'Raleway', sans-serif;
      font-weight: 900;
      letter-spacing: 0.1rem;
      margin: 0 auto;
    }
    .occupation {
      letter-spacing: 0.2rem;
      margin-bottom: 1.2rem;
      span {
        font-size: 1.2rem;
      }
    }
    button {
      color: #fff;
      border-color: $focus_color;
      font-size: 1.2rem;
      line-height: 3.4rem;
      letter-spacing: 0.3rem;
      padding: 0 2rem;
      background: 0 0;
      transition: all 0.3s ease-in-out;
      outline: none;
    }
    button:hover {
      background-color: $focus_color;
      border-color: #fff;
    }
  }
  a {
    padding-top: 70px;
    position: absolute;
    left: 50%;
    bottom: 10px;
    z-index: 2;
    display: block;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    text-decoration: none;
  }
  a span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 40px;
    height: 40px;
    margin-left: -20px;
    border-left: 2px solid $focus_color;
    border-bottom: 2px solid $focus_color;
    -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
    -webkit-animation: sdb 1.5s infinite;
    animation: sdb 1.5s infinite;
    box-sizing: border-box;
  }
  @-webkit-keyframes sdb {
    0% {
      -webkit-transform: rotateY(0) rotateZ(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
  @keyframes sdb {
    0% {
      transform: rotateY(0) rotateZ(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
}
</style>
