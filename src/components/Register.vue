<template>
    <div class="overlay">
        <div class="error" v-if="error">{{error.message}}</div>

        <form action="#" class="login" @submit.prevent="pressed">
            
            <div class="remove-item">
                &times;
            </div>

            <h2 class="login__title">Регистрация</h2>

            <div class="login-block">
                <div class="login-block__icon">
                    <img src="" alt="">
                </div>
                <input type="text" class="login-block__input" required placeholder="Email" v-model="email"/>
            </div>

            <div class="login-block">
                <div class="login-block__icon">
                    <img src="" alt="">
                </div>
                <input type="password" class="login-block__input" required placeholder="Пароль" v-model="password"/>
            </div>

            <div class="login-block">
                <div class="login-block__icon">
                    <img src="" alt="">
                </div>
                <input type="name" class="login-block__input" required placeholder="Имя" v-model="name"/>
            </div>

            <p>
                <label>
                    <input type="checkbox"/>
                    <span>С правилами согласен</span>
                </label>
            </p>

            <button class="button button_login" type="submit">Зарегистрироваться</button>
            
            <p class="login-register">
                Уже есть аккаунт?
                <router-link to="/login">Войти</router-link>
            </p>
        </form>
    </div>    
</template>

<script>
import * as firebase from "firebase/app"
import "firebase/auth";

export default {
    name: "Register",
    data() {
        return {
            email: '',
            password: '',
            name: '',
            error: ''
        };
    },
    methods: {
        pressed() {
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(data => {
                console.log(data);
                this.$router.replace({ name: "Home" });
            })
            .catch(error => {
                this.error = error;
            });
        },
    }
}
</script>

<style scoped lang="scss">
$easy-color: #FFC373;
$dark-color: #BF8930;
$shadow: 5px 5px 15px rgba(#000, 0.3);

.login {
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

    &-register {
        text-align: center;
    }
}

.button {

    &_login {
        display: block;
        margin: 0 auto;
        margin-top: 20px;
    }
}

.error {

    color: red;

}

.remove-item {

    position: absolute;
    left: 60%;
    top: 30%;
    cursor: pointer;
    font-size: 25px;

}

</style>