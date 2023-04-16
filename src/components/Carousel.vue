<script setup>
import ButtonVue from "../components/Button.vue";
</script>

<script>
export default {
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>
<template>
  <div class="why-screen__wrapper">
    <div class="why-screen__carousel">
      <slot></slot>
    </div>

    <div class="why-screen__button__container">
      <ButtonVue :action="prev" text="Prev"></ButtonVue>
      <ButtonVue :action="next" text="Next"></ButtonVue>
    </div>
  </div>
</template>

<style scoped>
.why-screen__wrapper {
  text-align: center;
  width: 100%;
  padding: 20px 0;
  margin: 0 auto;
}

.why-screen__carousel {
  width: 100%;
}

.why-screen__button__container {
  margin: 15px 0;
}


</style>
