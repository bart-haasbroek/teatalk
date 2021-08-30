<template>
  <div class="page-wrapper content-wrapper">
    <div v-if="randomTopic">
      <div class="topic__wrapper">
        <Topic
          :text="randomTopic.text"
          :isFavorite="currentTopicIsFavorite"
          @onFavoriteClick="toggleAsFavorite()"
        />
        <div class="topic__nav" v-if="topicsAmount > 1">
          <button
            v-if="!allTopicsShown"
            @click="nextTopic()"
            class="button topic__next-button"
          >
            Nieuw praatje
          </button>
          <div v-else>
            <button @click="resetTopics()" class="button topic__next-button">
              Begin opnieuw
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="placeholder-text">
      <p>
        {{
          showFavoriteTopics
            ? "Er zijn geen favoriete praatjes. Klik op het hartje op de praatjespagina om een favoriet aan te maken"
            : "Er zijn geen praatjes om weer te geven"
        }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.dispatch("topics/getFavorites");
    this.nextTopic();
  },
  computed: {
    ...mapGetters({
      randomTopic: "topics/getRandomTopic",
      allTopicsShown: "topics/allTopicsShown",
      currentTopicIsFavorite: "topics/currentTopicIsFavorite",
      topics: "topics/getTopics"
    }),
    showFavoriteTopics() {
      return this.$store.state.topics.showFavorites;
    },
    topicsAmount() {
      return this.topics.length;
    }
  },
  methods: {
    nextTopic() {
      this.$store.dispatch("topics/nextTopic");
    },
    toggleAsFavorite() {
      this.$store.dispatch("topics/toggleFavoriteTopic");
    },
    resetTopics() {
      this.$store.dispatch("topics/resetTopics");
    }
  }
};
</script>

<style lang="scss">
.page-wrapper {
  display: flex;
  align-items: center;
}
.topic__next-button {
  margin: 20px auto;
}
.placeholder-text {
  text-align: center;
}
</style>
