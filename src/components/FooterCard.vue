<script>
export default {
    props: {
        cardText: String
    }
}
</script>

<template>
    <div class="card__wrapper">
        <p class="card__description">{{ cardText }}</p>
    </div>
</template>

<style scoped>
.card__wrapper {
    background-color: var(--text-color-primary);
    width: 150px;
    padding: 15px;
    margin: 0 10px;
}

.card__description {
    font-size: 14px;
}
</style>