<template>
  <button class="btn text-white px-10 rounded-full h-10">
    <slot>

    </slot>
  </button>
</template>

<script setup>
</script>

<style lang='scss' scoped>
.btn {
  background: #0582da;
  transition-duration: .3s;

  &:hover {
    transition-duration: .3s;
    background: #00ac61;
  }
}
</style>