<template>
    <div class="roulette">
        <div class="roulette-jackpot">
          <img src="@/assets/jptitle.png" alt="" class="roulette-jackpot__image">
          <div class="roulette-jackpot__bank">
            <span>5</span>
            <span>1</span>
            <span>6</span>
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>P</span>
          </div>
        </div>

        <div class="roulette__body roulette-carousel">

            <div class="roulette-carousel__controls roulette-carousel__controls--dropdown">
              <div class="control-item control-item__dropdown">
                <p class="control-item__selected">Dropdown</p>
                <div class="control-item__options">
                  <p class="control-item__options-item"></p>
                  <p class="control-item__options-item"></p>
                </div>
              </div>
              <div class="control-item control-item__dropdown">
                <p class="control-item__selected">Dropdown</p>
                <div class="control-item__options">
                  <p class="control-item__options-item"></p>
                  <p class="control-item__options-item"></p>
                </div>
              </div>
              <div class="control-item control-item__dropdown">
                <p class="control-item__selected">Dropdown</p>
                <div class="control-item__options">
                  <p class="control-item__options-item"></p>
                  <p class="control-item__options-item"></p>
                </div>
              </div>
              <div class="control-item">
                <p class="control-item__selected">Скин</p>
              </div>
              <div class="control-item">
                <p class="control-item__selected">StatTrack</p>
              </div>
              <div class="control-item">
                <p class="control-item__selected">Сумма выигрыша</p>
              </div>
            </div>

            <div class="roulette-carousel__outer">
              <div class="spark"></div>
              <div class="spark"></div>
              <div class="spark"></div>
              <div class="spark"></div>

              <div class="top-lamp"></div>
              <div class="bottom-lamp"></div>
              <div class="left-bar">
                <div class="spin-container">
                  <h4 class="spin-title">free-spin</h4>
                </div>
                <div class="loading-bar">
                  <span class="load-item"></span>
                  <span class="load-item"></span>
                  <span class="load-item"></span>
                </div>
              </div>

              <div class="roulette-carousel__inner">
                <span class="carousel-coner"></span>
                <span class="carousel-coner"></span>
                <span class="carousel-coner"></span>
                <span class="carousel-coner"></span>

                <div class="roulette-carousel__inner-wrapper">
                  <div class="roulette-carousel__col">
                    <div class="roulette-item">
                      <div class="roulette-item__title">Wear: <span>0.0012</span></div>
                      <div class="roulette-item__quality-bar">
                        <div class="factory"></div>
                        <div class="minimal"></div>
                        <div class="field"></div>
                        <div class="worn"></div>
                        <div class="scarred"></div>
                      </div>
                    </div>
                    <div class="roulette-item">
                      <div class="roulette-item__title">Wear: <span>0.0012</span></div>
                      <div class="roulette-item__quality-bar">
                        <div class="factory"></div>
                        <div class="minimal"></div>
                        <div class="field"></div>
                        <div class="worn"></div>
                        <div class="scarred"></div>
                      </div>
                    </div>
                    <div class="roulette-item">
                      <div class="roulette-item__title">Wear: <span>0.0012</span></div>
                      <div class="roulette-item__quality-bar">
                        <div class="factory"></div>
                        <div class="minimal"></div>
                        <div class="field"></div>
                        <div class="worn"></div>
                        <div class="scarred"></div>
                      </div>
                    </div>
                  </div>
                  <!-- type drop -->
                  <div class="roulette-carousel__col">
                    <div class="roulette-item">
                      <div class="roulette-item__image-wrapper droptype-wrapper">
                        <img src="@/assets/droptype.png" alt="" class="roulette-item__img droptype">
                      </div>
                      <p class="droptype-title">Contraband</p>
                    </div>
                    <div class="roulette-item">
                      <div class="roulette-item__image-wrapper droptype-wrapper">
                        <img src="@/assets/droptype.png" alt="" class="roulette-item__img droptype">
                      </div>
                      <p class="droptype-title">Contraband</p>
                    </div>
                    <div class="roulette-item">
                      <div class="roulette-item__image-wrapper droptype-wrapper">
                        <img src="@/assets/droptype.png" alt="" class="roulette-item__img droptype">
                      </div>
                      <p class="droptype-title">Contraband</p>
                    </div>
                  </div>
                  <!-- weapon -->
                  <div class="roulette-carousel__col">
                    <div class="roulette-item">
                      <div class="roulette-item__image-wrapper weapon-wrapper">
                        <span class="higlight"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <img src="@/assets/gunnoskin.png" alt="" class="roulette-item__img weapon">
                      </div>
                    </div>
                    <div class="roulette-item">
                      <div class="roulette-item__image-wrapper weapon-wrapper">
                        <span class="higlight"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <img src="@/assets/gunnoskin.png" alt="" class="roulette-item__img weapon">
                      </div>
                    </div>
                    <div class="roulette-item">
                      <div class="roulette-item__image-wrapper weapon-wrapper">
                        <span class="higlight"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <img src="@/assets/gunnoskin.png" alt="" class="roulette-item__img weapon">
                      </div>
                    </div>
                  </div>
                  <!-- skin -->
                  <div class="roulette-carousel__col">
                    <div class="roulette-item">
                      <div class="roulette-item__image-wrapper weapon-wrapper">
                        <span class="higlight"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <img src="@/assets/gunExample.png" alt="" class="roulette-item__img weapon">
                      </div>
                    </div>
                    <div class="roulette-item">
                      <div class="roulette-item__image-wrapper weapon-wrapper">
                        <span class="higlight"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <img src="@/assets/gunExample.png" alt="" class="roulette-item__img weapon">
                      </div>
                    </div>
                    <div class="roulette-item">
                      <div class="roulette-item__image-wrapper weapon-wrapper">
                        <span class="higlight"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <img src="@/assets/gunExample.png" alt="" class="roulette-item__img weapon">
                      </div>
                    </div>
                  </div>
                  <div class="roulette-carousel__col">
                    <div class="roulette-item">
                      <div class="bonus-img-wrapper">
                        <img src="@/assets/stattrack.png" alt="" class="bonus-img">
                      </div>
                    </div>
                    <div class="roulette-item">
                      <div class="bonus-img-wrapper">
                        <img src="@/assets/respin.png" alt="" class="bonus-img">
                      </div>
                    </div>
                    <div class="roulette-item">
                      <div class="bonus-img-wrapper">
                        <img src="@/assets/stattrack.png" alt="" class="bonus-img">
                      </div>
                    </div>
                  </div>
                  <div class="roulette-carousel__col">
                    <div class="roulette-item">
                      <div class="summury-revenue">
                        0456456456₽
                      </div>
                    </div>
                    <div class="roulette-item">
                      <div class="summury-revenue">
                        0456456456₽
                      </div>
                    </div>
                    <div class="roulette-item">
                      <div class="summury-revenue">
                        0456456456₽
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <div class="roulette-carousel__controls spin-controls">
              <div class="spin-controls__open-cases open-cases">
                <p class="open-cases__title">Открыть кейсов:</p>
                <div class="open-cases__form">
                  <button class="open-cases__amount-opt">1</button>
                  <button class="open-cases__amount-opt">2</button>
                  <button class="open-cases__amount-opt active">3</button>
                </div>
              </div>
              <div class="spin-controls__bet">
                <input type="number" class="spin-controls__bet-input" placeholder="Сумма от 1₽ до 5000₽">
                <div class="spin-controls__bet-btn">
                  luck
                  <i class="luck-ico"></i>
                </div>
              </div>
              <div class="spin-controls__howto">
                <button class="spin-controls__howto-btn"><i class="how-ico">?</i>Как это работает</button>
              </div>
            </div>
            <div class="roulette-carousel__controls hotkeys">
              <p class="hotkeys__title">Горячие клавиши:</p>
              <div class="hotkeys__item">
                <div class="hotkeys__item-key">enter</div>
                <p class="hotkeys__item-text">Открыть кейс</p>
              </div>
              <div class="hotkeys__item">
                <div class="hotkeys__item-key">space</div>
                <p class="hotkeys__item-text">Остановить кейс</p>
              </div>
              <div class="hotkeys__item">
                <div class="hotkeys__item-key">s</div>
                <p class="hotkeys__item-text">Продать предмет</p>
              </div>
              <div class="hotkeys__item">
                <div class="hotkeys__item-key">r</div>
                <p class="hotkeys__item-text">Повторить</p>
              </div>
            </div>
          </div>
          <div class="roulette__case">
            <h2 class="content-title">Содержимое кейса</h2>
            <div class="roulette__case__drop case-drop">
              <div class="case-drop__item drop-item">
                <div class="drop-item__inner">
                  <img src="@/assets/gunExample.png" alt="" class="drop-item__image">
                    <h4 class="drop-item__title">Какой-то автомат длинноеслово</h4>
                    <div class="drop-item__price">750₽</div>
                    <i class="drop-item__icon"></i>
                    <span class="drop-item__ft">ft</span>
                  <span class="deco"></span>
                </div>
              </div>
              <div class="case-drop__item drop-item">
                <div class="drop-item__inner">
                  <img src="@/assets/gunExample.png" alt="" class="drop-item__image">
                    <h4 class="drop-item__title">Какой-то автомат </h4>
                    <div class="drop-item__price">750₽</div>
                    <i class="drop-item__icon"></i>
                    <span class="drop-item__ft">ft</span>
                  <span class="deco"></span>
                </div>
              </div>
  
              <div class="case-drop__item drop-item">
                <div class="drop-item__inner">
                  <img src="@/assets/gunExample.png" alt="" class="drop-item__image">
                    <h4 class="drop-item__title">Th Emperor</h4>
                    <div class="drop-item__price">750₽</div>
                    <i class="drop-item__icon"></i>
                    <span class="drop-item__ft">ft</span>
                  <span class="deco"></span>
                </div>
              </div>
  
              <div class="case-drop__item drop-item">
                <div class="drop-item__inner">
                  <img src="@/assets/gunExample.png" alt="" class="drop-item__image">
                    <h4 class="drop-item__title">Какой-то автомат </h4>
                    <div class="drop-item__price">750₽</div>
                    <i class="drop-item__icon"></i>
                    <span class="drop-item__ft">ft</span>
                  <span class="deco"></span>
                </div>
              </div>
  
              <div class="case-drop__item drop-item">
                <div class="drop-item__inner">
                  <img src="@/assets/gunExample.png" alt="" class="drop-item__image">
                    <h4 class="drop-item__title">Оченьдилнноеслово20</h4>
                    <div class="drop-item__price">750₽</div>
                    <i class="drop-item__icon"></i>
                    <span class="drop-item__ft">ft</span>
                  <span class="deco"></span>
                </div>
              </div>
  
              <div class="case-drop__item drop-item">
                <div class="drop-item__inner">
                  <img src="@/assets/gunExample.png" alt="" class="drop-item__image">
                    <h4 class="drop-item__title">Оченьдилнноеслово20</h4>
                    <div class="drop-item__price">750₽</div>
                    <i class="drop-item__icon"></i>
                    <span class="drop-item__ft">ft</span>
                  <span class="deco"></span>
                </div>
              </div>
  
              <div class="case-drop__item drop-item">
                <div class="drop-item__inner">
                  <img src="@/assets/gunExample.png" alt="" class="drop-item__image">
                    <h4 class="drop-item__title">Оченьдилнноеслово20</h4>
                    <div class="drop-item__price">750₽</div>
                    <i class="drop-item__icon"></i>
                    <span class="drop-item__ft">ft</span>
                  <span class="deco"></span>
                </div>
              </div>
  
              <div class="case-drop__item drop-item">
                <div class="drop-item__inner">
                  <img src="@/assets/gunExample.png" alt="" class="drop-item__image">
                    <h4 class="drop-item__title">Оченьдилнноеслово20</h4>
                    <div class="drop-item__price">750₽</div>
                    <i class="drop-item__icon"></i>
                    <span class="drop-item__ft">ft</span>
                  <span class="deco"></span>
                </div>
              </div>
  
              <div class="case-drop__item drop-item">
                <div class="drop-item__inner">
                  <img src="@/assets/gunExample.png" alt="" class="drop-item__image">
                    <h4 class="drop-item__title">Оченьдилнноеслово20</h4>
                    <div class="drop-item__price">750₽</div>
                    <i class="drop-item__icon"></i>
                    <span class="drop-item__ft">ft</span>
                  <span class="deco"></span>
                </div>
              </div>
        </div>
      </div>
    </div>
</template>


// <script>
//     import axios from 'axios';
//     import $ from 'jquery';
//     import {TweenLite, Power2, CSSPlugin} from 'gsap';

//     export default {
//         data() {
//             return {
//                 box: [],
//                 price: 0,
//                 items: [],
//                 selectedMethod: 1,
//                 audio: {
//                     ready: false,
//                     scroll: null,
//                     open: null
//                 },
//                 game: {
//                     animationDuration: 10,
//                     itemWidth: 118,
//                     padding: 6,
//                     clearance: 8,
//                     startOffset: 3
//                 },
//                 currentPosition: {
//                     x: 0,
//                     prevX: 0
//                 },
//                 newItems: [],
//                 ready: false,
//                 fastOpen: false,
//                 animation: null,
//                 showPrize: false,
//                 isMultiple: false,
//                 fullPrice: 0
//             }
//         },
//         methods: {
//             async get() {
//                 const request = await axios.post('/api/cases/one', {name_url: this.$route.params.name});
//                 if (request.data.success) {
//                     this.box = request.data.box;
//                     this.items = request.data.items;

//                     if (this.$i18n.locale === 'ru') {
//                         this.price = this.box.price;
//                     } else {
//                         this.price = this.box.price_en;
//                     }
//                     this.$root.hideLoading();
//                 } else {
//                     this.$router.go(-1);
//                 }
//             },
//             async selectMethod(number) {
//                 this.selectedMethod = number;
//                 if (this.$i18n.locale === 'ru') {
//                     this.price = this.box.price * number;
//                 } else {
//                     this.price = (this.box.price_en * number).toFixed(2);
//                 }
//             },
//             async setAudio() {
//                 this.audio.scroll = new Audio();
//                 this.audio.scroll.src = '/audio/case_scroll.mp3';
//                 this.audio.scroll.volume = .2;
//             },
//             async getRandomVal(min, max) {
//                 return Math.random() * (max - min) + min;
//             },
//             getRandomItem() {
//                 return this.items[Math.floor(Math.random() * this.items.length)]
//             },
//             setGames(destinationCeil) {
//                 let containers = [];
//                 this.newItems.forEach((game, i) => {
//                     for (let i = 0; i < destinationCeil + 5; i++) {
//                         const randomItem = this.getRandomItem();

//                         game.content.push(randomItem);
//                     }

//                     game.content[destinationCeil] = game.drop;
//                     containers.push($(`#roll-${i}`));
//                 });
//                 containers.unshift(this.currentPosition);
//                 return containers;
//             },
//             checkPlaySound() {
//                 const game = this.game;
//                 const currPosition = Math.floor(-1 * (this.currentPosition.x + game.itemWidth / 2) / (game.itemWidth + game.padding));
//                 if (currPosition !== this.currentPosition.prevX) {
//                     this.currentPosition.prevX = currPosition;
//                     this.playScroll();
//                 }
//             },
//             playScroll() {
//                 this.audio.scroll.currentTime = 0;
//                 this.audio.scroll.play();
//             },
//             async open(type) {
//                 const request = await axios.post('/api/cases/open', {
//                     id: this.box.id,
//                     count: this.selectedMethod,
//                     type: type
//                 });
//                 const data = request.data;
//                 if (!data.success) return $.wnoty({type: 'error', message: this.$t(`box.${data.message}`)});
//                 this.newItems = data.data.map((item, i) => ({
//                     content: [],
//                     id: item.id,
//                     drop: item.item,
//                     node: null
//                 }));

//                 await this.$root.getBalance();
//                 this.audio.open.play();

//                 if (type === 'default') {
//                     this.setAudio();

//                     const destinationCeil = Math.floor(await this.getRandomVal(30, 45));
//                     let destinationPosition = -1 * ((destinationCeil - this.game.startOffset) * (this.game.itemWidth + this.game.padding)) + this.game.itemWidth / 2;
//                     destinationPosition -= await this.getRandomVal(this.game.clearance, this.game.itemWidth - this.game.clearance);

//                     const containers = this.setGames(destinationCeil);

//                     this.ready = true;
//                     this.animation = TweenLite.to(containers, this.game.animationDuration, {
//                         x: destinationPosition,
//                         force3D: true,
//                         onComplete: () => {
//                             this.setPrize();
//                         },
//                         onUpdate: this.checkPlaySound,
//                         ease: Power2.easeOut
//                     });
//                 } else {
//                     this.setPrize();
//                 }
//             },
//             setPrize() {
//                 const audio = new Audio();
//                 audio.src = '/audio/case_reveal.mp3';
//                 audio.volume = .2;

//                 audio.play();

//                 if (this.newItems.length > 1) this.isMultiple = true;

//                 if (!this.isMultiple) {
//                     const item = this.newItems[0]['drop'];

//                     if (this.$i18n.locale === 'ru') {
//                         this.fullPrice = item.price.toFixed(2);
//                     } else {
//                         this.fullPrice = item.price_en.toFixed(2);
//                     }
//                 } else {
//                     if (this.$i18n.locale === 'ru') {
//                         this.fullPrice = parseFloat(this.newItems.reduce((sum, current) => sum + current.drop.price, 0).toFixed(2));
//                     } else {
//                         this.fullPrice = parseFloat(this.newItems.reduce((sum, current) => sum + current.drop.price_en, 0).toFixed(2));
//                     }
//                 }

//                 this.showPrize = true;
//             },
//             refresh() {
//                 this.audio.ready = false;
//                 this.audio.scroll = false;
//                 this.game = {
//                     animationDuration: 10,
//                     itemWidth: 118,
//                     padding: 6,
//                     clearance: 8,
//                     startOffset: 3
//                 };
//                 this.currentPosition = {
//                     x: 0,
//                     prevX: 0
//                 };
//                 this.newItems = [];
//                 this.ready = false;
//                 this.fastOpen = false;
//                 this.animation = null;
//                 this.showPrize = false;
//                 this.isMultiple = false;
//                 this.fullPrice = 0;
//             },
//             multipleSell(id, position) {
//                 this.sellItem(id);

//                 const array = this.newItems;
//                 array.splice(position, 1);

//                 this.newItems = array;

//                 if (this.newItems.length === 0) this.refresh();
//             },
//             sell() {
//                 if (!this.isMultiple) {
//                     this.sellItem(this.newItems[0].id);
//                 } else {
//                     this.sellItem(this.newItems.map(order => order.id));
//                 }

//                 this.refresh();
//             },
//             async sellItem(id) {
//                 const request = await axios.post('/api/users/sell', {id: id});
//                 const data = request.data;

//                 this.$root.getBalance();

//                 $.wnoty({
//                     type: data.type,
//                     message: this.$t(`box.${data.message}`)
//                 });
//             }
//         },
//         mounted() {
//             this.audio.open = new Audio();
//             this.audio.open.src = '/audio/case_open.mp3';
//             this.audio.open.volume = .2;

//             this.$root.showLoading();
//             this.get();
//         },
//         destroyed() {
//             if (this.animation !== null) {
//                 this.animation.kill();
//             }
//         }
//     }
// </script>