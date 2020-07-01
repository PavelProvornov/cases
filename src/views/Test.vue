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

            <button @click='start'>start</button> 

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
                  <div class="roulette-carousel__col" v-for='(slot, index) in slots' ref='slots' :key="index">
                      <!-- wear -->
                    <div class="roulette-item" v-for='(opt, index) in slot.items' :key="index">
                      <div class="item-inner" v-if="slot.type === 'wear'">
                          <div class="roulette-item__title">Wear: <span>0.0012</span></div>
                          <div class="roulette-item__quality-bar">
                            <div class="factory"></div>
                            <div class="minimal"></div>
                            <div class="field"></div>
                            <div class="worn"></div>
                            <div class="scarred"></div>
                          </div>
                      </div>
                      <!-- type -->
                      <div class="item-inner" v-if="slot.type === 'type'">
                        <div class="roulette-item__image-wrapper droptype-wrapper">
                            <img src="@/assets/droptype.png" alt="" class="roulette-item__img droptype">
                        </div>
                        <p class="droptype-title">Contraband</p>
                      </div>
                      <!-- weapon -->
                      <div class="item-inner" v-if="slot.type === 'weapon'">
                        <div class="roulette-item__image-wrapper weapon-wrapper">
                            <span class="higlight"></span>
                            <span class="corner"></span>
                            <span class="corner"></span>
                            <span class="corner"></span>
                            <span class="corner"></span>
                            <img src="@/assets/gunnoskin.png" alt="" class="roulette-item__img weapon">
                        </div>
                      </div>
                      <!-- skin -->
                      <div class="item-inner" v-if="slot.type === 'skin'">
                        <div class="roulette-item__image-wrapper weapon-wrapper">
                            <span class="higlight"></span>
                            <span class="corner"></span>
                            <span class="corner"></span>
                            <span class="corner"></span>
                            <span class="corner"></span>
                            <img src="@/assets/gunExample.png" alt="" class="roulette-item__img weapon">
                        </div>
                      </div>
                      <!-- bonus -->
                      <div class="item-inner" v-if="slot.type === 'bonus'">
                        <div class="bonus-img-wrapper">
                            <img src="@/assets/stattrack.png" alt="" class="bonus-img">
                        </div>
                      </div>
                      <!-- sum -->
                      <div class="item-inner" v-if="slot.type === 'sum'">
                        <div class="summury-revenue">
                            0456456456₽
                        </div>
                      </div>
                    </div>

                    <div class="roulette-item clone" v-for='(opt, index) in slot.items' :key="index">
                      <div class="item-inner" v-if="slot.type === 'wear'">
                          <div class="roulette-item__title">Wear: <span>0.0012</span></div>
                          <div class="roulette-item__quality-bar">
                            <div class="factory"></div>
                            <div class="minimal"></div>
                            <div class="field"></div>
                            <div class="worn"></div>
                            <div class="scarred"></div>
                          </div>
                      </div>
                      <!-- type -->
                      <div class="item-inner" v-if="slot.type === 'type'">
                        <div class="roulette-item__image-wrapper droptype-wrapper">
                            <img src="@/assets/droptype.png" alt="" class="roulette-item__img droptype">
                        </div>
                        <p class="droptype-title">Contraband</p>
                      </div>
                      <!-- weapon -->
                      <div class="item-inner" v-if="slot.type === 'weapon'">
                        <div class="roulette-item__image-wrapper weapon-wrapper">
                            <span class="higlight"></span>
                            <span class="corner"></span>
                            <span class="corner"></span>
                            <span class="corner"></span>
                            <span class="corner"></span>
                            <img src="@/assets/gunnoskin.png" alt="" class="roulette-item__img weapon">
                        </div>
                      </div>
                      <!-- skin -->
                      <div class="item-inner" v-if="slot.type === 'skin'">
                        <div class="roulette-item__image-wrapper weapon-wrapper">
                            <span class="higlight"></span>
                            <span class="corner"></span>
                            <span class="corner"></span>
                            <span class="corner"></span>
                            <span class="corner"></span>
                            <img src="@/assets/gunExample.png" alt="" class="roulette-item__img weapon">
                        </div>
                      </div>
                      <!-- bonus -->
                      <div class="item-inner" v-if="slot.type === 'bonus'">
                        <div class="bonus-img-wrapper">
                            <img src="@/assets/stattrack.png" alt="" class="bonus-img">
                        </div>
                      </div>
                      <!-- sum -->
                      <div class="item-inner" v-if="slot.type === 'sum'">
                        <div class="summury-revenue">
                            0456456456₽
                        </div>
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

<script>
const next = window.requestAnimationFrame ||
   window.webkitRequestAnimationFrame ||
   window.mozRequestAnimationFrame ||
   window.msRequestAnimationFrame ||
   window.oRequestAnimationFrame ||
   function(cb) { window.setTimeout(cb, 1000/60) }

export default {
	data () {
        return {
        slots: [
            {
                type: "wear",
                items: [
                    "today",
                    "next week",
                    "last year",
                    "tomorrow",
                    "yesterday",
                ]
            }, 
            {
                type: "type",
                items: [
                    "at home",
                    "at work",
                    "at school",
                    "at the gym",
                    "at the park",
                    "at the beach",
                    "at the sidewalk",
                    "at the city",
                    ]
            }, 
            {
                type: "weapon",
                items: [
                    "cycling",
                    "walking",
                    "swimming",
                    "flying",
                ]
            },
            {
                type: "skin",
                items: [
                    "cycling",
                    "walking",
                    "swimming",
                    "flying",
                ]
            },
            {
                type: "bonus",
                items: [
                    "cycling",
                    "walking",
                    "swimming",
                    "flying",
                ]
            },
            {
                type: "sum",
                items: [
                    "cycling",
                    "walking",
                    "swimming",
                    "flying",
                ]
            }
        ],
        opts: null,
        startedAt: null,
        }
    }, 
    methods: {
    start: function() {
        if (this.opts) {
            return
        }	
        this.opts = this.slots.map( (data, i) => {
            const slot = this.$refs.slots[i]
            const choice = Math.floor( Math.random() * data.items.length )
            console.log("choice", i, data.items[choice])
            const opts = {
                el: slot,
                finalPos: choice * 180,
                startOffset: 2000 + Math.random() * 500 + i * 500,
                height: data.items.length * 180,
                duration: 3000 + i * 700, // milliseconds
                isFinished: false,
            }
            return opts
        })
        next( this.animate )
    },
    
    animate: function(timestamp) {
            if (this.startedAt == null) {
                this.startedAt = timestamp
            }
            const timeDiff = timestamp - this.startedAt
      
            this.opts.forEach( opt => {
                if (opt.isFinished) {
                    return
                }
                const timeRemaining = Math.max(opt.duration - timeDiff, 0)
                const power = 3
                const offset = ( Math.pow(timeRemaining, power) / Math.pow(opt.duration, power) ) * opt.startOffset
                // negative, such that slots move from top to bottom
                const pos = -1 * Math.floor((offset + opt.finalPos) % opt.height)
                opt.el.style.transform = "translateY(" + pos + "px)"
                if ( timeDiff > opt.duration ) {
                console.log('finished', opt, pos, opt.finalPost)
                    opt.isFinished = true
                }
            })
      
            if (this.opts.every( o => o.isFinished )) {
                this.opts = null
                this.startedAt = null
                console.log('finished')
            } else {
                next( this.animate )
            }
    }
  }
}
</script>