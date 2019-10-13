<template>
  <div id="wrapper">
    <div class="profile-wrapper">
      <div class="profile columns is-mobile">
        <div class="column">
          <div class="image">
            <img
              class="is-rounded"
              src="@/assets/image/profile_icon.jpeg"
              alt="icon"
            />
          </div>
        </div>

        <div class="profile-description column">
          <div>
            <p>Name: taakuuyaa</p>
            <p>Age: 24</p>
            <p>Job: Engineer</p>
          </div>
        </div>
      </div>
      <hr />
      <p>
        コスメ系ECスタートアップでWEBエンジニアをしています。
        主にフロントエンド(Nuxt.js)・バックエンド(Rails)を担当しています。
        趣味は酒・映画鑑賞・モータースポーツ・ガジェット集め etc.
      </p>

      <div class="history">
        <h1>History</h1>
        <p class="history-item">
          2018.07 ~ now
          <a href="https://noin.tv/" target="_blank">
            NOIN, INC based in Tokyo
          </a>
        </p>
        <p class="history-item">
          2018.04 ~ 2019.06
          <a href="https://www.gnavi.co.jp/" target="_blank">
            Gurunavi, Inc based in Tokyo
          </a>
        </p>
      </div>

      <div class="links">
        <h1>Accounts</h1>
        <div class="columns is-mobile">
          <div class="column">
            <a href="https://github.com/taakuuyaa">
              <font-awesome-icon
                :icon="['fab', 'github-square']"
                class="fa-4x"
              />
            </a>
          </div>
          <div class="column">
            <a href="https://github.com/taakuuyaa">
              <font-awesome-icon
                :icon="['fab', 'twitter-square']"
                class="fa-4x"
              />
            </a>
          </div>
          <div class="column">
            <a href="https://github.com/taakuuyaa">
              <font-awesome-icon :icon="['fab', 'instagram']" class="fa-4x" />
            </a>
          </div>
          <div class="column">
            <a href="https://github.com/taakuuyaa">
              <font-awesome-icon
                :icon="['fab', 'facebook-square']"
                class="fa-4x"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style lang="scss">
#wrapper {
}
.profile-wrapper {
  max-width: 800px;
  font-size: 20px;
  margin: 0 auto;
  padding: 24px;
  .profile {
    .profile-icon {
      margin: auto;
    }
    .profile-description {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .history {
    text-align: center;
    margin-top: 10px;
    padding: 0 55px;
    .history-item {
      text-align: left;
    }
  }
  .links {
    text-align: center;
    margin-top: 10px;
    a {
      color: #000000;
    }
  }
}
</style>
