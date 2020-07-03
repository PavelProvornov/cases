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
                <transition-group name="list-complete" tag="div" style="justify-content:flex-start" class="live-drop__list">
                    <div class="live-drop__list-item rare-purple list-complete-item" style="height: 125px" v-for="item of live" :key="item">
                        <span class="live-drop__list-item--arrow"></span>
                        <img src="@/assets/gunExample.png" alt="" class="live-drop__image">
                    </div>
                </transition-group>
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
    // props: {
    //     liveDrop: Array
    // },
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
        setInterval(()=>{
            this.live.unshift(Math.random())
            if (this.live.length >= 9) {
                this.live.pop()
            }
        }, 2000)
    }
}
</script>

<style>
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(-30px);
}
.list-complete-leave-active {
  position: absolute;
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
</style>