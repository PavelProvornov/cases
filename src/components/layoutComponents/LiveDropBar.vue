<template>
    <div class="sidebar">
        <div class="sidebar__logo">
            <a href="/" class="sidebar__logo-link">
            <img src="@/assets/logo.png" alt="" class="sidebar__logo-item">
            </a>
        </div>
        <div class="sidebar__live-drop live-drop">
            <div class="live-drop__control">
            <button class="live-drop__control-item selected">
                <i></i>
            </button>
            <button class="live-drop__control-item">
                <i></i>
            </button>
            </div>
            <div class="live-drop__list">
            <div class="live-drop__list-item rare-purple">
                <span class="live-drop__list-item--arrow"></span>
                <img src="@/assets/gunExample.png" alt="" class="live-drop__image">
            </div>
            <div class="live-drop__list-item rare-yellow">
                <span class="live-drop__list-item--arrow"></span>
                <img src="@/assets/gunExample.png" alt="" class="live-drop__image">
            </div>
            <div class="live-drop__list-item rare-basic">
                <span class="live-drop__list-item--arrow"></span>
                <img src="@/assets/gunExample.png" alt="" class="live-drop__image">
            </div>
            <div class="live-drop__list-item rare-basic">
                <span class="live-drop__list-item--arrow"></span>
                <img src="@/assets/gunExample.png" alt="" class="live-drop__image">
            </div>
            <div class="live-drop__list-item rare-yellow">
                <span class="live-drop__list-item--arrow"></span>
                <img src="@/assets/gunExample.png" alt="" class="live-drop__image">
            </div>
            <div class="live-drop__list-item rare-basic">
                <span class="live-drop__list-item--arrow"></span>
                <img src="@/assets/gunExample.png" alt="" class="live-drop__image">
            </div>
            <div class="live-drop__list-item rare-purple">
                <span class="live-drop__list-item--arrow"></span>
                <img src="@/assets/gunExample.png" alt="" class="live-drop__image">
            </div>
            <div class="live-drop__list-item rare-yellow">
                <span class="live-drop__list-item--arrow"></span>
                <img src="@/assets/gunExample.png" alt="" class="live-drop__image">
            </div>
            <div class="live-drop__list-item rare-purple">
                <span class="live-drop__list-item--arrow"></span>
                <img src="@/assets/gunExample.png" alt="" class="live-drop__image">
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            live: [],
        }
    },
    methods: {
        setOnline(online) {
            this.stats.online = online;
        },
        async getLiveDrop() {
            const request = await axios.post('/api/cases/liveDrop');
            this.setStatistic(request.data.stats);
        },
        async setFill() {
            if (this.$root.user !== null) {
                const request = await axios.post('/api/payments/create', {promo: this.$root.modal.promocode, sum: this.sum});
                setTimeout(() => {
                    window.location.href = request.data;
                }, 100);
            }
        },
        changeLang(lang) {
            this.$root.getBalance();
            this.$router.push({
                name: this.$route.name,
                params: {
                    lang: lang
                }
            })
        }
    },
    sockets: {
        online: function (online) {
            this.setOnline(online);
        },
        liveDrop: function (live) {
            if (live.type === 'default') {
                setTimeout(() => {
                    this.setStatistic(live.live.stats);
                }, 11000)
            } else if (live.type === 'upgrade') {
                setTimeout(() => {
                    this.setStatistic(live.live.stats);
                }, 15000)
            } else {
                this.setStatistic(live.live.stats);
            }
        }
    },
    mounted() {
        this.getLiveDrop();
    }
}
</script>