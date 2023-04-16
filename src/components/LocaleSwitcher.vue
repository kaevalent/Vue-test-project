<script>
export default {
    methods: {
        changeLocale(event) {
            this.$emit('localeChange', event.target.value);
        }
    }
}
</script>

<template>
    <select class="locales" name="locales" @change="changeLocale($event)">
        <option value="mn" class="locale__option" :selected="true">Монгол хэл</option>
        <option value="en" class="locale__option">English</option>
    </select>
</template>

<style scoped>
.locales {
    border: none;
}

</style>