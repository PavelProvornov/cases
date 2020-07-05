<template>

<div class="popup-wrapper">
        <div class="inner-wrapper">
            <div class="popup-screen">
                <div class="popup popup-email" v-if="step === 1">
                <button class="popup--close"></button>
                <h2 class="popup__title">Добавить почту</h2>
                <div class="popup-email__form">
                    <input type="email" placeholder="Введите ваш e-mail адрес"  class="popup-email__form-input">
                </div>
                <button class="popup-email__button" @click="next">Продолжить</button>
                </div>

                <div class="popup popup-email" v-if="step === 2">
                    <button class="popup--close"></button>
                    <h2 class="popup__title">Подтвердите почту</h2>
                    <p class="popup__text popup__text--centered">
                    На ваш e-mail адрес было отправлено 
                    письмо, перейдите по ссылке в письме
                    для подтверждения почты.
                    
                    Важно ! Проверьте папку спам !
                    </p>
                    <button class="popup-email__button" @click="next">Продолжить</button>
                </div>

                <div class="popup popup-email" v-if="step === 3">
                    <button class="popup--close" @click="closePopup"></button>
                    <h2 class="popup__title">Вы подтвердили почту</h2>
                    <div class="success-img">
                    </div>
                    <p class="popup__text popup__text--centered">
                    Вы успешно подтвердили почту,
                    можете закрыть это окно !
                    </p>
                    <button class="popup-email__button" @click="next">Закрыть</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            step: 1
        }
    },
    methods: {
        next() {
            this.step = this.step + 1   
            if (this.step > 3) this.closePopup()
        },
        closePopup() {
            this.step = 1
            this.$emit('closeEmail')
        }
    },
    created() {
        this.step = 1
    },
    beforeDestroy() {
        this.step = 1
    }
}
</script>