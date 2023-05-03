<template>
  <section
    class="section"
    :class="className"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped></style>
