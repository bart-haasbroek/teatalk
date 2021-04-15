<template>
  <div class="content-wrapper">
    <!-- <Logo /> -->
    <div class="topic__wrapper">
      <div class="topic" v-if="randomTopic">
        <div class="topic__inner">
          <p>
            {{ randomTopic.text }}
          </p>
        </div>
      </div>
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
      <button @click="toggleAsFavorite()" class="button topic__next-button">
        {{ currentTopicIsFavorite ? "Verwijder als" : "Maak" }} favoriet
      </button>
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
.topic {
  text-align: center;
  background: #efefef;
  border: 1px solid;
  position: relative;
  width: 50%;
  min-width: 300px;
  margin: 0 auto;

  p {
    font-size: 20px;
    line-height: 1.5;
    font-weight: bold;
  }

  &__inner {
    padding: 20px;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &__next-button {
    margin: 20px auto;
  }
}
</style>
