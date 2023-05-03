<template>
  <main class="main"></main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  @include gridable(100%);
  grid-area: block;
  justify-items: center;
  grid-template-rows: repeat(2, 1fr);
}
</style>
