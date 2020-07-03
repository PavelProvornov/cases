<template>
    <div class="user-profile">
          <div class="user-profile__info">
            <div class="user-profile__info-main info-main">
              <div class="info-main__avatar">
                <div class="info-main__avatar-wrapper">
                  <img src="@/assets/avatar.jpg" alt="" class="info-main__avatar-image">
                </div>
              </div>
              <div class="info-main__user">
                <h4 class="info-main__user-title">Username <button class="info-main__user-logout"></button></h4>
                <p class="info-main__user-balance">Баланс: <span class="amount">501,00</span><span class="currency">$</span></p>
                <a href="" class="info-main__user-history-link"><i class="watch-icon"></i>История</a>
                <button class="info-main__user-replenish-balance"><i class="plus-icon"></i>Пополнить</button>
              </div>
            </div>
            <div class="user-profile__info-trade info-trade">
              <div class="info-trade__base">
                <h4 class="info-trade__base-title">Ваша трейд-ссылка</h4>
                <p class="info-trade__base-description">Введите ссылку для обмена трейдом с сайтом, 
                  в случае если вы ее не введете сайт не сможет выдать вам ваш приз.</p>
                <input type="text" class="info-trade__base-link" placeholder="Укжите вашу трейд-ссылку" >
                <a href="" class="info-trade__base-support-link">Где взять ссылку ?</a>
              </div>
              <div class="info-trade__controls">
                <button class="info-trade__controls-add-email"><i class="mail-icon"></i>Добавить email-адрес</button>
                <button class="info-trade__controls-auth"><i class="phone-icon"></i>Factor auth</button>
              </div>
            </div>
          </div>

          <div class="user-profile__drop">
            <div class="user-profile__drop-controls">
              <div class="drop-stats">
                <div class="drop-stats__item">
                  <p class="drop-stats__item-value">836</p>
                  <p class="drop-stats__item-description">Кейсов открыто</p>
                </div>
                <div class="drop-stats__item">
                  <p class="drop-stats__item-value">83 372,00<span class="currency">₽</span></p>
                  <p class="drop-stats__item-description">Сумма предметов</p>
                </div>
              </div>
              <div class="drop-controls">
                <div class="drop-controls__sell">
                  <button class="drop-controls__sell-btn drop-controls__sell-btn--all">Продать все</button>
                  <button class="drop-controls__sell-btn drop-controls__sell-btn--available">Доступные для продажи</button>
                </div>
                <div class="drop-controls__filters">
                  <button class="drop-controls__filters-item">
                    <span class="value">0-10</span>₽
                  </button>
                  <button class="drop-controls__filters-item">
                    <span class="value">10-50</span>₽
                  </button>
                  <button class="drop-controls__filters-item active">
                    <span class="value">55-99</span>₽
                  </button>
                  <button class="drop-controls__filters-item">
                    <span class="value">100-499</span>₽
                  </button>
                  <button class="drop-controls__filters-item">
                    <span class="value">500-999</span>₽
                  </button>
                  <button class="drop-controls__filters-item">
                    <span class="value">1000+</span>₽
                  </button>
                </div>
              </div>
            </div>

            <div class="user-profile__drop-list drop-list">

              <div class="drop-list__item drop-item">
                <div class="drop-item__inner">
                  <div class="drop-item__action action-sell-container">
                    <button class="action-sell round-btn"></button>
                  </div>
                  <img src="@/assets/gunExample.png" alt="" class="drop-item__image">
                  <h4 class="drop-item__title">Какой-то автомат </h4>
                  <div class="drop-item__price">750₽</div>
                  <span class="deco"></span>
                </div>
              </div>

              <div class="drop-list__item drop-item">
                <div class="drop-item__inner">
                  <div class="drop-item__action action-new">
                    <button class="action-new-btn"><i class="keep-icon"></i>Забрать</button>
                    <button class="action-new-btn"><i class="sell-icon"></i>Продать</button>
                  </div>
                  <img src="@/assets/gunExample.png" alt="" class="drop-item__image">
                  <h4 class="drop-item__title">Какой-то автомат </h4>
                  <div class="drop-item__price">750₽</div>
                  <span class="deco"></span>
                </div>
              </div>

              <div class="drop-list__item drop-item">
                <div class="drop-item__inner">
                  <div class="drop-item__action action-space-around">
                    <button class="action-currency round-btn"></button>
                    <button class="action-timer round-btn"></button>
                    <button class="action-ok round-btn"></button>
                  </div>
                  <img src="@/assets/gunExample.png" alt="" class="drop-item__image">
                  <h4 class="drop-item__title">Какой-то автомат </h4>
                  <div class="drop-item__price">750₽</div>
                  <span class="deco"></span>
                </div>
              </div>

            </div>
          </div>

        </div>
</template>

<script>
    import axios from 'axios';
    import $ from 'jquery'

    export default {
        data() {
            return {
                user: [],
                activeTab: 'items',
                type: '',
                trade_link: '',
                items: [],
                contracts: [],
                page: 0,
                morePage: false,
                loadingMore: false
            }
        },
        methods: {
            async get() {
                const request = await axios.post('/api/users/get', {id: this.$route.params.id});

                if (request.data.success) {
                    this.type = request.data.type;
                    this.user = request.data.user;
                    this.trade_link = this.user.trade_link;

                    this.loadItems();

                    this.$root.hideLoading();
                } else {
                    this.$router.go(-1);
                }
            },
            async saveLink() {
                const request = await axios.post('/api/users/saveLink', {trade_link: this.trade_link});
                const data = request.data;

                $.wnoty({
                    type: data.type,
                    message: this.$t(`users.${data.message}`)
                });
            },
            async loadItems() {
                this.loadingMore = true;
                const request = await axios.post('/api/users/items', {id: this.$route.params.id, page: this.page += 1});

                const array = this.items;
                Array.prototype.push.apply(array, request.data.items);

                this.items = array;
                this.morePage = request.data.more;
                this.loadingMore = false;
            },
            async loadContracts() {
                this.loadingMore = true;
            },
            async sellItem(id, i) {
                const request = await axios.post('/api/users/sell', {id: id});
                const data = request.data;

                this.$root.getBalance();

                if (data.type === 'success') {
                    if (this.$i18n.locale === 'ru') {
                        if (this.user.allPrice[0].myBet !== null) this.user.allPrice[0].myBet = parseInt(this.user.allPrice[0].myBet) - parseInt(this.items[i].item.price);
                    } else {
                        if (this.user.allPrice[0].myBet_en !== null) this.user.allPrice[0].myBet_en = parseFloat(this.user.allPrice[0].myBet_en) - parseFloat(this.items[i].item.price_en);
                    }
                    this.items[i].status = 1;
                    this.$forceUpdate();
                }

                $.wnoty({
                    type: data.type,
                    message: this.$t(`users.${data.message}`)
                });
            },
            async buyItem(id, i) {
                $.wnoty({
                    type: 'info',
                    message: this.$t('users.waitRequest')
                });

                const request = await axios.post('/api/users/buy', {id: id});
                const data = request.data;

                if (data.type === 'success') {
                    this.items[i].status = data.status;
                    this.$forceUpdate();
                }

                $.wnoty({
                    type: data.type,
                    message: this.$t(`users.${data.message}`)
                });
            },
            async loadTab(tab) {
                switch (tab) {
                    case 'items':
                        this.loadItems();
                        this.activeTab = 'items';
                        break;
                    case 'contracts':
                        this.loadContracts();
                        this.activeTab = 'contracts';
                        break;
                }
            },
            async sellAll() {
                $.wnoty({
                    type: 'info',
                    message: this.$t('users.selling')
                });

                const request = await axios.post('/api/users/sellAll');
                const data = request.data;

                if (data.type === 'success') {
                    for (let i in this.items) {
                        this.items[i].status = 1;
                    }
                    this.$root.getBalance();
                    this.user.allPrice[0].myBet = 0;
                    this.$forceUpdate();
                }

                $.wnoty({
                    type: data.type,
                    message: this.$t(`users.${data.message}`)
                });
            }
        },
        mounted() {
            this.$root.showLoading();
            this.get();
        },
        sockets: {
            setItemStatus: function (drop) {
                if (this.$root.user !== null && parseInt(drop.user_id) === parseInt(this.$root.user.id)) {
                    for (let [key, value] in this.items) {
                        if (this.items[key].id === drop.id) {
                            this.items[key].status = drop.status;
                            if (drop.status === 5) this.items[key].trade_id = drop.trade_id;
                            if (drop.status === 6) this.items[key].hover = 'item--hover';
                            this.$forceUpdate();
                        }
                        void value
                    }
                }
            }
        }
    }
</script>