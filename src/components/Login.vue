<template>
    <div class="overlay">
        <form action="#" class="login" @submit.prevent="pressed">
            <div class="remove-item">
                &times;
            </div>
            <h2 class="login__title">Авторизация</h2>
            <div class="login-block">
                <div class="login-block__icon">
                    <img src="" alt="">
                </div>
                <input type="text" class="login-block__input" required placeholder="Email" v-model="email">
            </div>
            <div class="login-block">
                <div class="login-block__icon">
                    <img src="" alt="">
                </div>
                <input type="password" class="login-block__input" required placeholder="Password" v-model="password"/>
            </div>
            <button class="button button_login" type="submit">Войти</button>
            <p class="login-register">
                Нет аккаунта?
                <router-link to="/register">Зарегистрироваться</router-link>
            </p>
        </form>
        <div class="error" v-if="error">{{error.message}}</div>
    </div>
</template>

<script>
import * as firebase from "firebase/app"
import "firebase/auth";
export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
            error: ''
        };
    },
    methods: {
        pressed() {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(data => {
                console.log(data);
                this.$router.replace({ name: "Home" });
            })
            .catch(error => {
                this.error = error;
            });
        }
    }
}

</script>

<style scoped lang="scss">
$easy-color: #FFC373;
$dark-color: #BF8930;
$shadow: 5px 5px 15px rgba(#000, 0.3);

// .overlay {
//     display: none;
// }

// .overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

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