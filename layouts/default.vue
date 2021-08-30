<template>
  <main>
    <div class="layout-wrapper">
      <header>
        <div class="header-content">
          <h1>
            {{ showFavoriteTopics ? "Favorieten" : "Praatjes" }}
          </h1>
        </div>
      </header>
      <Nuxt />
    </div>
    <footer>
      <div class="tab-bar">
        <button
          class="button tab-bar__button"
          :class="{ 'is-active': !showFavoriteTopics }"
          @click="$store.dispatch('topics/showFavorites', false)"
        >
          <div class="tab-bar__button-icon">
            <img
              src="~/assets/icons/heart.svg"
              v-if="!showFavoriteTopics"
              alt="is favorite icon"
            />
            <img
              src="~/assets/icons/heart-black.svg"
              v-else
              alt="is favorite icon"
            />
          </div>
          Praatjes
        </button>
        <button
          class="button tab-bar__button"
          :class="{ 'is-active': showFavoriteTopics }"
          @click="$store.dispatch('topics/showFavorites', true)"
        >
          <div class="tab-bar__button-icon">
            <img
              src="~/assets/icons/heart.svg"
              v-if="showFavoriteTopics"
              alt="is favorite icon"
            />
            <img
              src="~/assets/icons/heart-black.svg"
              v-else
              alt="is favorite icon"
            />
          </div>
          Favorieten
        </button>
      </div>
    </footer>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    showFavoriteTopics() {
      return this.$store.state.topics.showFavorites;
    }
  }
};
</script>

<style lang="scss">
.header-content {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
h1 {
  color: white;
  text-align: center;
  font-size: 18px;
}
.tab-bar {
  display: flex;
  &__button {
    background: transparent;
    font-size: 12px;
    color: black;
    padding: 0;
    height: 50px;
    border-radius: 0;
    opacity: 0.2;

    &.is-active {
      color: #38b2c7;
      opacity: 1;
    }
  }
  &__button-icon {
    width: 25px;
    height: 25px;
    margin: 0 auto;
  }
}
main {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
}
header {
  height: calc(55px + env(safe-area-inset-top));
  background: #38b2c7;
}
.layout-wrapper {
  grid-template-rows: auto 1fr;
  display: grid;
}
footer {
  height: calc(50px + env(safe-area-inset-bottom));
  background: #e8e8e8;
}
</style>
