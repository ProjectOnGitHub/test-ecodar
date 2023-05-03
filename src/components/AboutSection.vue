<template>
  <base-section class-name="about">
    <div class="about__container">
      <h1 class="about__title">Your Favorite One Page Multi Purpose Template</h1>
      <p class="about__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna vel
        scelerisque nisl consectetur et. scelerisque nisl consectetur et.
      </p>
      <button
        class="about__button"
        name="about-button"
        type="button"
        aria-label="Find out more"
      >
        Find out more
      </button>
    </div>
  </base-section>
</template>

<script>
import BaseSection from './BaseSection.vue';

export default { components: { BaseSection } };
</script>

<style lang="scss" scoped>
.about {
  height: 100vh;
  background-repeat: no-repeat;
  align-items: center;
  background-size: cover;
  background-image: url('../assets/images/background.png');
  position: relative;
  &::before {
    content: '';
    z-index: 0;
    box-sizing: border-box;
    position: absolute;
    background-color: rgba($color-blue, 0.9);
    height: 100vh;
    width: 100%;
  }
  &__container {
    @include gridable(100%);

    justify-items: center;
    max-width: calc(930px + $common-padding * 2);
    z-index: 5;
    padding: $header-height $common-padding 0 $common-padding;
    box-sizing: border-box;
    color: $color-light;
  }
  &__title {
    font-size: 65px;
    line-height: 1.09;
    font-weight: 700;
    text-align: center;
    padding-bottom: 30px;
    margin: 0;
    text-transform: uppercase;
    width: 25ch;
    @media screen and (max-width: $desktop) {
      font-size: 48px;
    }
    @media screen and (max-width: $tablet) {
      font-size: 36px;
    }
    @media screen and (max-width: $tablet-small) {
      font-size: 32px;
    }
    @media screen and (max-width: $smartphone) {
      font-size: 28px;
      width: 100%;
    }
  }
  &__text {
    font-size: 22px;
    line-height: 1.5;
    text-align: center;
    margin: 0;
    padding-bottom: 70px;
    @media screen and (max-width: $desktop) {
      font-size: 18px;
      padding-bottom: 40px;
    }
    @media screen and (max-width: $tablet) {
      font-size: 14px;
    }
    @media screen and (max-width: $tablet-small) {
      font-size: 12px;
    }
  }
  &__button {
    @include flexible(201px);
    @include button();
    height: 46px;
    border-radius: 2px;
    font-size: 13px;
    line-height: 1.61;
    text-transform: uppercase;
    color: $color-light;
    background-color: $color-red;
  }
}
</style>
