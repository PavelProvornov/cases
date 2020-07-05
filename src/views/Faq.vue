<template>
    <div class="faq">
      <h1 class="content-title">Профиль игрока</h1>
      <div class="faq__list">
        <FaqItem 
            v-for="(qi, index) in questions" 
            :key="index"
            :question="qi.q"
            :answer="qi.a"
        />
      </div>
    </div>
</template>

<script>
import FaqItem from "../components/faq/Faq-item"
export default {
    data() {
        return {
            questions: [
                {
                    q: "Lorem1",
                    a: "LoremLorem1"
                },
                {
                    q: "Lorem2",
                    a: "LoremLorem2"
                },
                {
                    q: "Lorem3",
                    a: "LoremLorem3"
                },
                {
                    q: "Lorem4",
                    a: "LoremLorem4"
                }
            ]
        }
    },
    components: {
        FaqItem
    }
}
</script>