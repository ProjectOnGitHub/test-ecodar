<template>
  <main class="main">
    <about-section />
  </main>
</template>

<script>
import AboutSection from './AboutSection.vue';

export default { components: { AboutSection } };
</script>

<style lang="scss" scoped>
.main {
  @include gridable(100%);
  grid-area: block;
  justify-items: center;
  grid-template-rows: repeat(2, 1fr);
}
</style>
