<script>
export default {
  props: ["visibleSlide", "index", "direction","backgroundImg"],
};
</script>

<template>
  <div class="why-screen__item" v-show="visibleSlide === index">
    <slot></slot>
  </div>
</template>

<style scoped>
.why-screen__item { 
  border-radius: 10px;
  transition: 0.5s ease-in;
  min-height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-position: center;
  color: var(--background-color-primary);
  /* background-image: url('https://picsum.photos/1500/1000/?image=187'); */
  background-image: var(--background-picture)
}


.why-screen__item > * {
  margin: 7px;
}
</style>
