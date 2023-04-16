<script>
export default {
  props: {
    isActive: Boolean,
    text: String,
    action: Function,
  },
  methods: {},
};
</script>

<template>
  <button
    class="btn"
    :class="{ 'btn--active': isActive, 'btn--not-active': !isActive }"
    @click="action"
  >
    {{ text }}
  </button>
</template>

<style scoped>
.btn {
  border: 0 none;
  padding: 10px 15px;
  max-width: 300px;
  min-width: 5em;
  font-weight: 900;
  margin: 0 10px;
  border-radius: 5px;
  background-color: var(--card-color);
}

.btn--active {
  background-color: #eda553;
  color: var(--text-color-primary);
}

.btn--not-active {
  background-color: var(--card-color);
  color: var(--text-color-primary);
}

.btn--active:hover {
  background-color: #e7891e;
  transition: ease-out 0.4s;
}

.btn--not-active:hover {
  background-color: rgb(211, 211, 211);
  transition: ease-out 0.4s;
}

.btn {
  cursor: pointer;
}
</style>
