import axios from 'axios';
<template>
    <div class="popup-wrapper">
        <div class="inner-wrapper">
            <div class="popup-screen">
              
              <div class="popup popup-history">
                <button class="popup--close" style="z-index: 99" @click="closePopup"></button>
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
            history: []
        }
    },
    methods: {
        getHistory () {
            axios.get("/dfgdfg")
        },
        closePopup() {
          this.$emit('closeHistory')
        }
    }
}
</script>