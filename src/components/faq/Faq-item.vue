<template>
    <div class="faq__list-item faq-item" :class="{'unfolded': unfolded}">
      <div class="faq-item__question faq-question">
        <div class="faq-question__image">
          <i class="faq-question__image-icon"></i>
        </div>
        <p class="faq-question__text">
          {{question}}
        </p>
        <button class="faq-question__collapse-btn" @click="unfolded = !unfolded"></button>
      </div>
      <div class="faq-item__answer faq-answer">
        <div class="faq-answer__body">
          <div class="faq-answer__text">
            {{answer}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            unfolded: false
        }
    },
    props: {
        question: String,
        answer: String,
    }
}
</script>