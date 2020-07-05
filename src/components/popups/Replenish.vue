import axios from 'axios';
<template>
    <div class="popup-wrapper">
        <div class="inner-wrapper">
            <div class="popup-screen">
              <div v-if="showHistory === false" class="popup popup-replenish">
                <button class="popup--close" style="z-index: 99" @click="closePopup"></button>
                <h2 class="popup__title">Пополнение баланса</h2>
                <p class="popup__text">Для пополнения баланса вы будете
                  перемещены на сайт платёжной системы. </p>
                <p class="popup__text">Баланс пополняется моментально, но если этого не произошло
                  в течение часа напишите нам на почту support@csveg.as,
                  указав подробные данные платежа.</p>
                <div class="popup-replenish__form">
                  <input type="number" v-model="amount" placeholder="Сумма от 100₽" class="popup-replenish__form-input">
                  <a rel="stylesheet" class="popup-replenish__form-btn">Пополнить</a>
                </div>
                <div class="popup-replenish__form promo">
                  <input type="text" v-model="code" placeholder="Промо-код (если есть)"  class="popup-replenish__form-input">
                </div>
                <a class="popup-replenish__history" @click.prevent="showHistory = !showHistory">История пополнений</a>
              </div>
              <!-- history -->
              <div v-else class="popup popup-history">
                <button class="popup--close" style="z-index: 99" @click="showHistory = !showHistory"></button>
                <h2 class="popup__title">История пополнений</h2>
  
                <div class="popup-history__item" v-for="(note,i) of history" :key="i">
                  <p class="popup-history__item-amount">{{note.sum}}₽</p>
                  <span class="popup-history__item-date">{{note.date}}</span>
                </div>
                
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            code: "",
            amount: "",
            showHistory: false,
            history: []
        }
    },
    methods: {
        getHistory () {
            axios.get("/dfgdfg")
        },
        closePopup() {
            this.$emit("closeReplenish")
        }
    }
}
</script>