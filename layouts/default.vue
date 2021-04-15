<template>
  <main>
    <div>
      <header></header>
      <Nuxt />
    </div>
    <footer></footer>
  </main>
</template>

<style>
main {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
}
header {
  height: 50px;
  background: #ccc;
}
footer {
  height: 50px;
  background: #ccc;
}
</style>
