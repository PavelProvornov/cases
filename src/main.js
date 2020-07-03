import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueSocketIO from 'vue-socket.io'
import VueCookies from 'vue-cookies'
import axios from 'axios';
import $ from 'jquery'

Vue.config.productionTip = false

Vue.use(VueCookies);

// window.user = JSON.parse(document.head.querySelector('meta[name="user"]').content);
// window.config = JSON.parse(document.head.querySelector('meta[name="settings"]').content);

let port = '8081';
if (window.location.protocol === 'https:') port = '8443';

Vue.use(new VueSocketIO({
    connection: window.location.origin + ':' + port
}));

new Vue({
  router,
  data: {
      user: null,
      config: null,
      isLoading: false,
      modal: {
          active: false,
          promocode: ''
      }
  },
  methods: {
    async getUser() {
        this.user = window.user;
    },
    async getConfig() {
        this.config = window.config;
    },
    async hideLoading() {
        this.isLoading = false;
    },
    async showLoading() {
        this.isLoading = true;
    },
    async getBalance() {
        if (this.user !== null) {
            const request = await axios.post('/api/users/getBalance');
            this.user.balance = request.data;
        }
    },
    getCurrency() {
        // if (this.$i18n.locale === 'ru') {
            return 'Р';
        // } else {
        //     return '$';
        // }
    },
    async openFill() {
        if (this.user !== null) {
            const vm = this;
            this.modal.active = true;

            setTimeout(() => {
                $('body').click(function (event) {
                    if ($(event.target).is('.styles_overlayCenter__YHoO7')) {
                        vm.modal.active = false;
                    }
                });

                $('.modal__close').click(function () {
                    vm.modal.active = false;
                });
            }, 100);
        }
    },
    async getSeo() {
        const name = this.$route.name;

        const request = await axios.post('/api/loadSeo', {name: name}),
            seo = request.data;
        $('title').text(seo.title);
        $('meta[name=description]').text(seo.description);
        $('meta[name=keywords]').text(seo.keywords);
    }
},
async mounted() {
    this.$watch(
        'modal.promocode',
        async () => {
            const request = await axios.post('/api/checkPromocode', {code: this.modal.promocode});
            const data = request.data;

            if (data.success) {
                $('.promocode__value').html(`Промокод на +${data.percent}%`);
            } else {
                $('.promocode__value').html(``);
            }
        }
    );
    this.getSeo();
},
  render: h => h(App),
}).$mount('#app')
