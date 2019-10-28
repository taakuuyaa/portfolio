<template>
  <div id="wrapper">
    <div class="profile-wrapper">
      <div class="profile columns is-mobile">
        <div class="column">
          <div class="image is-128x128">
            <img
              class="is-rounded"
              src="~/assets/image/profile_icon.jpeg"
              alt="icon"
            />
          </div>
        </div>

        <div class="profile-description column">
          <p>Name: taakuuyaa<br />Age: 24<br />Job: Engineer</p>
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
          <a href="https://noin.tv/" target="_blank" rel="nofollow noopener">
            NOIN, INC based in Tokyo
          </a>
        </p>
        <p class="history-item">
          2018.04 ~ 2019.06
          <a
            href="https://www.gnavi.co.jp/"
            target="_blank"
            rel="nofollow noopener"
          >
            Gurunavi, Inc based in Tokyo
          </a>
        </p>
      </div>

      <div class="links">
        <h1>Accounts</h1>
        <div class="columns is-mobile">
          <div class="column">
            <a href="https://github.com/taakuuyaa" aria-label="githubへ">
              <font-awesome-icon
                :icon="['fab', 'github-square']"
                class="fa-4x"
              />
            </a>
          </div>
          <div class="column">
            <a href="https://twitter.com/_taakuuyaa" aria-label="twitterへ">
              <font-awesome-icon
                :icon="['fab', 'twitter-square']"
                class="fa-4x"
              />
            </a>
          </div>
          <div class="column">
            <a
              href="https://www.instagram.com/_taakuuyaa"
              aria-label="instagramへ"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" class="fa-4x" />
            </a>
          </div>
          <div class="column">
            <a
              href="https://www.facebook.com/profile.php?id=100036937809528"
              aria-label="facebookへ"
            >
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
  p {
    font-size: 1.2rem;
  }
  .profile-wrapper {
    max-width: 800px;
    font-size: 20px;
    margin: 0 auto;
    padding: 24px;
    .profile {
      .is-128x128 {
        margin: auto;
      }
      .profile-icon {
        margin: auto;
      }
      .profile-description {
        display: flex;
        justify-content: left;
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
}
</style>
