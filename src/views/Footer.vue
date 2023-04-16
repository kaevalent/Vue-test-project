<template>
    <div class="footer">
        <div class="footer__wrapper">
            <p>Хаяг: #201, Мэдээлэл Технологийн Үндэсний Парк, Сүхбаатар Дүүрэг, Улаанбаатар хот, Монгол Улс
            <br/>
            info@sem.mn | +(976) 7707 0606
            <br/>
            © 2022 SEM.MN</p>
        </div>
        
        </div>
</template>

<style scoped>
.footer {
    border-top: var(--border);
    width: 100%;
    background-color: var(--background-color-primary);
}
.footer__wrapper {
    width: 75%;
    margin: 0 auto;
}

.footer__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.footer__links {
    width: 300px;
    padding: 15px;
    font-size: 14px;
    background-color: rgba(233, 233, 233, 0.377);
}

p {
    font-size: 16px;
    color: var(--text-color-primary);
    margin: 20px;
    text-align: center;
}
.footer__cards {
    display: flex;
    flex-direction: row;
}

</style>