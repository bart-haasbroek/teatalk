<template>
  <main>
    <div class="layout-wrapper">
      <header></header>
      <Nuxt />
    </div>
    <footer>
      <!-- <div class="tab-bar">
        <button class="button tab-bar__button">
          Favorites
        </button>
      </div> -->
    </footer>
  </main>
</template>

<style lang="scss">
.tab-bar {
  &__button {
    padding: 18px 10px;
  }
}
main {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
}
header {
  height: 55px;
  padding: env(safe-area-inset-top);
  background: #ccc;
}
.layout-wrapper {
  grid-template-rows: auto 1fr;
  display: grid;
}
footer {
  height: 50px;
  background: #ccc;
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
