<script setup>
import ButtonVue from "../components/Button.vue";
</script>

<script>
export default {
  methods: {
    redirectToProjects() {
      this.$router.push('/projects')
    },
    redirectToAbout() {
      this.$router.push('/why')
    }
  }
}
</script>

<template>
  <section class="about">
    <div class="about__wrapper">
      <h1 class="about__description">
        {{ $t('homepageTitle') }}
        <span class="about__description--emphasize">{{ $t('homepageAccent') }}</span>
        <br/>
        {{ $t('homepageTitle2') }}
      </h1>
      <div class="about__text">
        <p class="about__text__contents">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          labore, velit atque voluptatem voluptas nobis!
        </p>
      </div>

      <div class="about__buttons">
        <ButtonVue :text="$t('buttonText1')" :isActive="false" :action="redirectToProjects"></ButtonVue>
        <ButtonVue :text="$t('buttonText2')" :isActive="true" :action="redirectToAbout"></ButtonVue>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__wrapper {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 60px 90px;
}

.about__buttons {
  width: 300px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
}

.about__text__contents {
  color: var(--muted-color);
}

.about__description {
  color: var(--text-color-primary)
}

.about__description,
.about__description--emphasize {
  font-size: 76px;
  font-weight: 900;
  letter-spacing: -1.5px;
  line-height: 1.2;
}

.about__description--emphasize {
  background: linear-gradient(315deg, #eda553 25%, #ba3f1d);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.about__wrapper > * {
  margin: 20px auto;
}

@media (max-width:480px) {
  .about__buttons {
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.about__wrapper {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 30px 40px;
}
.about__description,
.about__description--emphasize {
  font-size: 45px;
  font-weight: 900;
  letter-spacing: -1.5px;
  line-height: 1.2;
}
}
</style>
