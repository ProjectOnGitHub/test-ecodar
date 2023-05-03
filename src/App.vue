<template>
  <div class="root">
    <the-header />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: { TheHeader }
};
</script>

<style lang="scss" scoped>
.root {
  @include gridable(100%);
  grid-template-areas: 'block';
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: space-between;
  box-sizing: border-box;
  height: 100%;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-weight: 400;
  line-height: 1.21;
  background-image: url('./assets/images/background.png');
}
</style>
