<template>
  <section class="section">
    <div class="container">
      <div class="main">
        <h3 class="subtitle is-spaced">HELLO, WORLD.</h3>
        <h1 class="title">I'm Taakuuyaa.</h1>
        <p class="occupation"><span>WEB DEVELOPER</span></p>
        <a v-scroll-to="{ element: '#about', duration: 700 }">
          <button>
            LEARN MORE
            <font-awesome-icon
              :icon="['fas', 'angle-double-down']"
              class="fa-1x"
            />
          </button>
        </a>
      </div>
      <a
        v-scroll-to="{ element: '#about', duration: 700 }"
        class="bottom-arrow"
      >
        <span></span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TopIntro',
}
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  justify-content: center;
  align-items: center;

  background: #000022 url('~assets/image/circuit.svg');
  min-height: 100%;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title,
  .subtitle,
  .occupation {
    color: #fff;
    margin-bottom: 8px;
  }

  .title {
    max-width: 900px;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    letter-spacing: 0.1rem;
  }
  .subtitle {
    color: $focus_color;
    letter-spacing: 0.2rem;
    font-family: 'Lato', sans-serif;
  }
  .occupation {
    letter-spacing: 0.2rem;
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

.bottom-arrow {
  span {
    position: absolute;
    bottom: -100%;
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
