<template>
  <main>
    <div class="layout-wrapper">
      <header></header>
      <Nuxt />
    </div>
    <footer>
      <div class="tab-bar">
        <button
          class="button tab-bar__button"
          :class="{ 'is-active': !showFavoriteTopics }"
          @click="$store.commit('topics/showFavorites', false)"
        >
          <div class="tab-bar__button-icon">
            <img
              src="~/assets/icons/heart-white.svg"
              v-if="!showFavoriteTopics"
              alt="is favorite icon"
            />
            <img src="~/assets/icons/heart.svg" v-else alt="is favorite icon" />
          </div>
          Praatjes
        </button>
        <button
          class="button tab-bar__button"
          :class="{ 'is-active': showFavoriteTopics }"
          @click="$store.commit('topics/showFavorites', true)"
        >
          <div class="tab-bar__button-icon">
            <img
              src="~/assets/icons/heart-white.svg"
              v-if="showFavoriteTopics"
              alt="is favorite icon"
            />
            <img src="~/assets/icons/heart.svg" v-else alt="is favorite icon" />
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
      console.log("this.$store.state.topics", this.$store.state.topics);
      return this.$store.state.topics.showFavorites;
    }
  }
};
</script>

<style lang="scss">
.tab-bar {
  display: flex;
  &__button {
    background: transparent;
    font-size: 12px;
    color: black;
    padding: 0;
    height: 50px;
    border-radius: 0;

    &.is-active {
      background: #42d3ec;
    }
  }
  &__button-icon {
    width: 25px;
    height: 25px;
    margin: 0 auto;
    margin-bottom: 5px;
  }
}
main {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
}
header {
  height: calc(55px + env(safe-area-inset-top));
  // border-radius: 0 0 25px 25px;
  background: #ccc;
}
.layout-wrapper {
  grid-template-rows: auto 1fr;
  display: grid;
}
footer {
  height: calc(50px + env(safe-area-inset-bottom));
  background: #ccc;
}
</style>
