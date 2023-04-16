<script>
import PlaymetrixIcon from './icons/PlaymetrixIcon.vue';

export default {
    name: "TestimonyCard",
    props: {
        imgLink: String,
        redirectLink: String,
        itemDescription: String
    },
    methods: {
        openAPage(redirectLink) {
            if (redirectLink !== '') {
              this.$emit("redirect", redirectLink);
            }
            
        },
    },
    components: { PlaymetrixIcon }
};
</script>

<template>
  <div
    class="testimony__item testimony__item--flex"
    @click="openAPage(redirectLink)"
  >
    <slot name="icon">
      
    </slot>
    <p class="testimony__item__description"> {{ itemDescription }}</p>
  </div>
</template>

<style scoped>
.testimony__item {
  padding: 20px;
  text-align: center;
  margin: 7px;
  width: 250px;
  background-color: var(--card-color);
  border: 1px solid transparent;
  border-radius: 5px;
}

.testimony__item {
  cursor: pointer;
}

.button-footer {
  margin-top: auto;
}

.testimony__item__icon {
  width: 155px;
  height: 155px;
}

.testimony__item--flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimony__item > * {
  display: block;
}

.testimony__item__description {
  font-size: 14px;
  margin: 15px 0;
  font-weight: 500;
  color: var(--text-color-primary)
}

.testimony__item:hover {
  background-color: rgb(233, 233, 233);
  transition: ease-in-out 0.4s;
}

@media (max-width: 541px) {
  .testimony__item {
  padding: 20px;
  text-align: center;
  margin: 7px;
  width: 100%;
  background-color: var(--card-color);
  border: 1px solid transparent;
  border-radius: 5px;
}
}
</style>
