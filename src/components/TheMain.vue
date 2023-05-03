<template>
  <main class="main">
    <about-section />
    <features-section />
  </main>
</template>

<script>
import AboutSection from './AboutSection.vue';
import FeaturesSection from './FeaturesSection.vue';

export default { components: { AboutSection, FeaturesSection } };
</script>

<style lang="scss" scoped>
.main {
  @include gridable(100%);
  grid-area: block;
  justify-items: center;
}
</style>
