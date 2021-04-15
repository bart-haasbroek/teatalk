<template>
  <div class="topic">
    <div class="topic__inner">
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text"]
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
}
</style>
