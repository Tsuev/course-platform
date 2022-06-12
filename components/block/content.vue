<template>
  <div class="content">
    <div class="content__title flex justify-between items-center mb-5">
      <h1 class="title">{{ title }}</h1>
      <UiButton v-if="btnTxt"> {{ btnTxt }} </UiButton>
    </div>
    <hr>
    <div class="content__main flex flex-wrap h-full">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    default: '',
    required: true,
    type: String
  },
  btnTxt: {
    default: '',
    required: false,
    type: String
  }
})
</script>

<style lang='scss'>
.content {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 20px;
}

.title {
  font-size: 35px;
}
</style>