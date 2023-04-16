<script>

export default {
  name: "CarouselItem",
  props: {
    header: String,
    description: String,
    imgLink: String,
  },
};
</script>

<template>
    <h3 class="why-screen__item__header">{{ header }}</h3>
    <p class="why-screen__item__description">{{ description }}</p>
  
</template>

<style scoped>
.why-screen__item__header {
  font-weight: 800;
  margin: 0px 10px;
  font-size: 23px;
}

.why-screen__item__image {
  width: 200px;
  margin: 0px 10px;
}

.why-screen__item__description {
  font-size: 17px;
  margin: 0px 10px;
  width: 25%;
  margin: 0 auto;
}

.why-screen__item__description, .why-screen__item__header, .why-screen__item__image {
  animation-name: appearing;
  animation-duration: 0.7s;
}

@keyframes appearing {
  0% {
    opacity: 0.1
  }
  25% {
    opacity: 0.25
  }
  50% {
    opacity: 0.5
  }
  75% {
    opacity: 0.75
  }
  100% {
    opacity: 1
  }
}

@media (max-width: 541px) {
  .why-screen__item__description {
  font-size: 17px;
  margin: 0px 10px;
  width: 100%;
  margin: 0 auto;
}
}
</style>
