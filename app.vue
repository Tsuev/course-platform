<template>
  <BlockHeader />
  <div class="wrapper">
    <NuxtPage />
  </div>
  <BlockBgEffect />
</template>

<script>
import '@/assets/scss/tailwind.css'
</script>

<style>
.wrapper {
  padding: 30px;
  max-width: 1220px;
  margin: 0 auto;
}
</style>
