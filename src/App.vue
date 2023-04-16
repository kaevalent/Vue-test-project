<script setup>
import FooterVue from './views/Footer.vue';
import LocaleSwitcherVue from './components/LocaleSwitcher.vue';
import ThemeSwitcherVue from './components/ThemeSwitcher.vue'
</script>

<script>
export default {
  methods: {
    changeLoc(localeName) {
      this.$i18n.locale = localeName
    }
  }
}
</script>

<template>
  <nav class="header">
    <section class="header__wrapper">
      <section class="header__icon">
        <p class="header__icon-description">
          <img src="@\assets\images\SEM.png" alt="icon" class="header__icon-image">
        </p>
      </section>
      <section class="header__items">
        <router-link
          to="/"
          custom
          v-slot="{ navigate, isActive, isExactActive }"
        >
          <div
            class="header__item"
            :class="{
              'header__item--active': isActive,
              'header__item--exact--active': isExactActive,
            }"
            @click="navigate"
          >
          {{$t('homepageScreen')}}
          </div>
        </router-link>
        <router-link
          to="/projects"
          custom
          v-slot="{ navigate, isActive, isExactActive }"
        >
          <div
            class="header__item"
            :class="{
              'header__item--active': isActive,
              'header__item--exact--active': isExactActive,
            }"
            @click="navigate"
          >
                      
{{$t('projectsScreen')}}
          </div>
        </router-link>
        <router-link
          to="/why"
          custom
          v-slot="{ navigate, isActive, isExactActive }"
        >
          <div
            class="header__item"
            :class="{
              'header__item--active': isActive,
              'header__item--exact--active': isExactActive,
            }"
            @click="navigate"
          >
            
{{$t('aboutScreen')}}
          </div>
        </router-link>
        <!-- <div class="header__item">About us</div>
                    <div class="header__item">Testimonies</div>
                    <div class="header__item">Contact us!</div> -->
      </section>
      <section class="header__utility">
        <LocaleSwitcherVue @localeChange="changeLoc"></LocaleSwitcherVue>
        <ThemeSwitcherVue></ThemeSwitcherVue>
      </section>
    </section>
  </nav>
  <main class="app">
    <RouterView />
  </main>
  <FooterVue>

  </FooterVue>
</template>

<style scoped>
.header__wrapper {
  width: 50%;
  margin: 0 auto;
}

.header__item {
  cursor: pointer;
  color:var(--text-color-primary);
}



.app {
  min-height: 78vh;
  background-color: var(--background-color-primary);

}

.header__wrapper,
.header__items, .header__utility {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.header__wrapper {
  align-items: center;
}

.header__utility {
  width: 200px;
}

.header {
  background-color: var(--background-color-primary);
  border-bottom:var(--border);
}

.header__item,
.header__icon,
.header__social {
  padding: 0.7em;
}

.header__icon-image {
  width: 150px;
}

.header__icon-description {
  font-size: 18px;
}

.header__item {
  font-size: 16px;
}

.header__item:hover {
  color: #d9ae36;
  transition: ease-in 0.4s;
}

.header__item--exact--active {
  color: #d9ae36;
}

@media (max-width:480px) {
  .header__wrapper,
.header__items {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
}

</style>
