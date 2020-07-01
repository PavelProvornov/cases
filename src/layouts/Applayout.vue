<template>
    <div id="app" >
        <Sidebar :liveDrop="stats.live"></Sidebar>
        <div class="container">
            <Topbar :stats="stats"></Topbar>
            <div class="content">
                <router-view></router-view>
            </div>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Footer from "../components/layoutComponents/Footer"
import Sidebar from "../components/layoutComponents/LiveDropBar"
import Topbar from "../components/layoutComponents/Topbar"

export default {
    data () {
        return {
            stats: {
                live: [],
                opens: 0,
                contracts: 0,
                battles: 0,
                users: 0,
                online: 0
            },
        }
    },
    methods: {
        setStatistic(stats) {
            this.stats.opens = stats.opens;
            this.stats.contracts = stats.contracts;
            this.stats.users = stats.users;
            this.stats.battles = stats.battles;
            this.live = stats.live;
        },
    },
    components: {
        Sidebar, Topbar, Footer
    }
}
</script>