<script>
export default {
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
  },

  data() {
    return {
      userTheme: "light-theme",
    };
  },

  methods: {
    toggleTheme(event) {
        this.setTheme(event.target.value)
    },

    getTheme() {
      return localStorage.getItem("user-theme");
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
  },
};
</script>

<template>
    <select name="theme-switch" class="theme-switch" @change="toggleTheme($event)">
        <option value="dark-theme">Night</option>
        <option value="light-theme">Light</option>
    </select>
</template>

<style scoped>
.theme-switch {
    border: none;
}
</style>