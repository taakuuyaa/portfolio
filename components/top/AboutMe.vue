<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">
        ABOUT
      </h1>

      <div class="columns">
        <!--      左側-->
        <div class="column">
          <h5 class="title">MY PROFILE</h5>
          <p>
            テストテストテストテストテストテストテストテストテストテストテストテストテスト
            テストテストテストテストテストテストテストテストテストテストテストテストテスト
            テストテストテストテストテストテストテストテストテストテストテストテストテスト
          </p>

          <ul>
            <li>
              <strong>テスト</strong>
              <br />
              <span>test</span>
            </li>
            <li>
              <strong>テスト</strong>
              <br />
              <span>test</span>
            </li>
            <li>
              <strong>テスト</strong>
              <br />
              <span>test</span>
            </li>
            <li>
              <strong>テスト</strong>
              <br />
              <span>test</span>
            </li>
            <li>
              <strong>テスト</strong>
              <br />
              <span>test</span>
            </li>
            <li>
              <strong>テスト</strong>
              <br />
              <span>test</span>
            </li>
          </ul>
        </div>
        <!--      右側-->
        <div class="column">
          <h5 class="title">MY SKILLS</h5>
          <p>
            テストテストテストテストテストテストテストテストテストテストテストテストテスト
            テストテストテストテストテストテストテストテストテストテストテストテストテスト
            テストテストテストテストテストテストテストテストテストテストテストテストテスト
          </p>

          <ul>
            <li>
              <strong>テスト</strong>
              <br />
              <progress class="progress is-small" value="90" max="100">
                90
              </progress>
            </li>
            <li>
              <strong>テスト</strong>
              <br />
              <progress class="progress is-small" value="90" max="100">
                90
              </progress>
            </li>
            <li>
              <strong>テスト</strong>
              <br />
              <progress class="progress is-small" value="90" max="100">
                90
              </progress>
            </li>
            <li>
              <strong>テスト</strong>
              <br />
              <progress class="progress is-small" value="90" max="100">
                90
              </progress>
            </li>
            <li>
              <strong>テスト</strong>
              <br />
              <progress class="progress is-small" value="90" max="100">
                90
              </progress>
            </li>
          </ul>
        </div>
      </div>
      <div class="columns has-text-centered">
        <div class="column">
          <h5 class="title">MY DEVELOPMENT TOOLS</h5>
          <p>Mac, PhpStorm, Bulma, Bitbucket, Gitlab, Github</p>
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
  height: 100%;

  .container {
    width: 90%;
  }
}
</style>
