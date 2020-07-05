<template>
    <div class="roulette-popup">
      <div class="roulette-popup__inner">
        <div class="roulette-popup__screen popup-screen">
          <div class="popup popup-drop">
            <button class="popup--close" style="z-index:99" @click="closePopup"></button>
            <div class="popup-drop__image">
              <img src="" alt="" class="popup-drop__image-item">
            </div>
            <h3 class="popup-drop__title">M4A1-S Рыцарь</h3>
            <p class="popup-drop__description">Предметы необходимо вывести в <router-link to="/profile">профиле</router-link>.</p>
            <div class="popup-drop__controls">
              <button class="popup-drop__btn btn-again"><i class="btn-icon"></i>Попробовать еще раз</button>
              <button class="popup-drop__btn btn-sell"><i class="btn-icon"></i>Продать за 320000₽</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        prize: Object
    },
    methods: {
      closePopup() {
        this.$emit('closePrize') 
      }
    }
}
</script>