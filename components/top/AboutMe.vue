<template>
  <section id="about" class="section">
    <div class="container">
      <h1 class="title has-text-centered">
        ABOUT
      </h1>

      <div class="columns is-mobile is-multiline">
        <!--      左側-->
        <div class="column is-12-mobile">
          <h5 class="title">MY PROFILE</h5>
          <p class="description">
            現在はコスメECスタートアップでエンジニアをしています。
          </p>

          <ul>
            <li>
              <strong>Name</strong>
              <br />
              <span>Takuya Kato</span>
            </li>
            <li>
              <strong>Sex</strong>
              <br />
              <span>Male</span>
            </li>
            <li>
              <strong>Birthday</strong>
              <br />
              <span>1995.05.31</span>
            </li>
            <li>
              <strong>Location</strong>
              <br />
              <span>Based in Tokyo</span>
            </li>
          </ul>
        </div>
        <!--      右側-->
        <div class="column is-12-mobile">
          <h5 class="title">MY SKILLS</h5>
          <p class="description">
            主にフロント・サーバーサイドをメインに開発をしています。
          </p>

          <h6 class="title is-5">Language</h6>
          <div class="tags">
            <span class="tag is-rounded is-dark">HTML</span>
            <span class="tag is-rounded is-dark">CSS</span>
            <span class="tag is-rounded is-dark">JavaScript</span>
            <span class="tag is-rounded is-dark">Ruby</span>
            <span class="tag is-rounded is-dark">PHP</span>
            <span class="tag is-rounded is-dark">Python</span>
          </div>

          <h6 class="title is-5">Framework</h6>
          <div class="tags">
            <span class="tag is-rounded is-dark">Laravel</span>
            <span class="tag is-rounded is-dark">Ruby on Rails</span>
            <span class="tag is-rounded is-dark">Vue.js</span>
            <span class="tag is-rounded is-dark">Nuxt.js</span>
          </div>

          <h6 class="title is-5">Other</h6>
          <div class="tags">
            <span class="tag is-rounded is-dark">Git</span>
            <span class="tag is-rounded is-dark">Linux</span>
            <span class="tag is-rounded is-dark">MySQL</span>
            <span class="tag is-rounded is-dark">Docker</span>
            <span class="tag is-rounded is-dark">Heroku</span>
            <span class="tag is-rounded is-dark">Netlify</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>

<style lang="scss" scoped>
.section {
  border-color: rebeccapurple;
}
.description {
  margin-bottom: 16px;
}
li {
  margin-bottom: 8px;
}
</style>
