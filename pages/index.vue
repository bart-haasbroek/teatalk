<template>
  <div class="page-wrapper content-wrapper">
    <div class="topic__wrapper">
      <Topic
        v-if="randomTopic"
        :text="randomTopic.text"
        :isFavorite="currentTopicIsFavorite"
        @onFavoriteClick="toggleAsFavorite()"
      />
      <div class="topic__nav">
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
      currentTopicIsFavorite: "topics/currentTopicIsFavorite"
    }),
    topics() {
      return this.$store.state.topics.topics;
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
</style>
