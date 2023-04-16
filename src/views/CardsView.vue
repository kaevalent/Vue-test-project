<script setup>
import EngiinmuruudulIcon from "../components/icons/EngiinmuruudulIcon.vue";
import PlaymetrixIcon from "../components/icons/PlaymetrixIcon.vue";
import TestimonyCardVue from "../components/TestimonyCard.vue";
import Aquametrix from "../components/icons/Aquametrix.vue";
import Fuelmetrix from "../components/icons/Fuelmetrix.vue";
import Energymetrix from "../components/icons/Energymetrix.vue";
import Evm from "../components/icons/Evm.vue";
import Clix from "../components/icons/Clix.vue";
import Dronex from "../components/icons/Dronex.vue";
import Agrometrix from "../components/icons/Agrometrix.vue";
</script>

<script>
export default {
    methods: {
        redirect(redirectionDeep) {
            window.open(redirectionDeep, "_blank");
        },
    },
    components: { PlaymetrixIcon, EngiinmuruudulIcon }
};
</script>

<template>
  <section class="testimony">
    <div class="testimony__wrapper">
      <h3 class="testimony_header">{{ $t('projectsScreen')}}</h3>
      <p class="muted-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat
        tempora cum id facere ad sed. Pariatur aliquid maxime voluptatum!
      </p>
      <div class="testimony__items">
          <TestimonyCardVue
            redirectLink="http://playmetrix.mn/"
            @redirect="redirect"
            :itemDescription="$t('playmetrixText')"
          >
        <template v-slot:icon>
          <PlaymetrixIcon></PlaymetrixIcon>
        </template>
        </TestimonyCardVue>
        <TestimonyCardVue
            redirectLink="https://www.facebook.com/engiinmuruudul"
            @redirect="redirect"
            :itemDescription="$t('engineText')"
          >
        <template v-slot:icon>
        <EngiinmuruudulIcon></EngiinmuruudulIcon>
        </template>
        </TestimonyCardVue>
        <TestimonyCardVue
            redirectLink="https://www.facebook.com/AquametrixSystem"
            @redirect="redirect"
            :itemDescription="$t('aquametrixText')"
          >
        <template v-slot:icon>
          <Aquametrix></Aquametrix>
        </template>
        </TestimonyCardVue>
        <TestimonyCardVue
            redirectLink=""
            @redirect="redirect"
            :itemDescription="$t('fuelmetrixText')"
          >
        <template v-slot:icon>
          <Fuelmetrix></Fuelmetrix>
        </template>
        </TestimonyCardVue>
        <TestimonyCardVue
            redirectLink="http://www.clix.mn/"
            @redirect="redirect"
            :itemDescription="$t('clixText')"
          >
        <template v-slot:icon>
          <Clix></Clix>
        </template>
        </TestimonyCardVue>
        <TestimonyCardVue
            redirectLink=""
            @redirect="redirect"
            :itemDescription="$t('agrometrixText')"
          >
        <template v-slot:icon>
          <Agrometrix></Agrometrix>
        </template>
        </TestimonyCardVue>
        <TestimonyCardVue
            redirectLink="https://www.facebook.com/DronexMongolia"
            @redirect="redirect"
            :itemDescription="$t('dronexText')"
          >
        <template v-slot:icon>
          <Dronex></Dronex>
        </template>
        </TestimonyCardVue>
        <TestimonyCardVue
            redirectLink=""
            @redirect="redirect"
            :itemDescription="$t('energymetrixText')"
          >
        <template v-slot:icon>
          <Energymetrix></Energymetrix>
        </template>
        </TestimonyCardVue>
        <TestimonyCardVue
            redirectLink=""
            @redirect="redirect"
            :itemDescription="$t('evmText')"
          >
        <template v-slot:icon>
          <Evm></Evm>
        </template>
        </TestimonyCardVue>
        

      </div>
    </div>
  </section>
</template>

<style scoped>
.testimony__items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 75%;
}

.testimony_header {
  font-size: 30px;
  font-weight: 900;
  color: var(--text-color-primary)
}

.muted-description {
  font-size: 18px;
  color: var(--muted-color);
  font-weight: 100;
}

.testimony_header,
.muted-description {
  text-align: center;
}

@media (max-width: 541px) {
  .testimony_header {
  font-size: 30px;
  font-weight: 900;
}

.muted-description {
  font-size: 18px;
  color: var(--muted-color);
  font-weight: 100;
}

.testimony__items {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 75%;
}
}
</style>
