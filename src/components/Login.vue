<template>
    <div class="overlay">
        <form action="#" class="login">
            <h2 class="login__title">Авторизация</h2>
            <div class="login-block">
                <div class="login-block__icon">
                    <img src="" alt="">
                </div>
                <input type="email" class="login-block__input" required placeholder="Email" v-model="email">
            </div>
            <div class="login-block">
                <div class="login-block__icon">
                    <img src="" alt="">
                </div>
                <input type="password" class="login-block__input" required placeholder="Password" v-model="password">
            </div>
            <button class="button button_login" type="submit" @click.prevent="signin">Войти</button>
        </form>
    </div>
</template>

<script>

export default {
    
}

</script>

<style scoped lang="scss">
$easy-color: #FFC373;
$dark-color: #BF8930;
$shadow: 5px 5px 15px rgba(#000, 0.3);

.login {
    display: none;
    width: 500px;
    padding: 100px 50px;
    background-color: $easy-color;
    box-shadow: $shadow;
    &__title {
        text-align: center;
        font-weight: 300;
        margin-bottom: 40px;
    }
    &-block {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }
}

.button {
    &_login {
        display: block;
        margin: 0 auto;
        margin-top: 20px;
    }
}

</style>