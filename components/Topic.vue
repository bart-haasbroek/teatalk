<template>
  <div class="topic">
    <div class="topic__favorite">
      <button @click="$emit('onFavoriteClick')" class="favorite-button">
        <img
          v-if="isFavorite"
          src="~/assets/icons/heart.svg"
          alt="is favorite icon"
        />
        <img
          v-else
          src="~/assets/icons/heart-outline.svg"
          alt="is not favorite icon"
        />
      </button>
    </div>
    <div class="topic__inner">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text", "isFavorite"]
};
</script>

<style lang="scss">
.topic {
  text-align: center;
  background: white;
  position: relative;
  width: 50%;
  min-width: 300px;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;

  &__favorite {
    position: absolute;
    right: 0;
    top: -44px;
    border-radius: 20px;
    padding-bottom: 20px;
    background: white;
  }

  .favorite-button {
    border: none;
    background: none;
    padding: 15px;
  }

  p {
    font-size: 20px;
    line-height: 1.5;
    font-weight: bold;
    color: #171717;
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
}
</style>
