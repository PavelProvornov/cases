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


<script>
import $ from 'jquery'

export default {
  created() {
    (function($) {
      var Roulette = function(options) {
        var defaultSettings = {
          maxPlayCount : null, // x >= 0 or null
          speed : 10, // x > 0
          stopImageNumber : null, // x >= 0 or null or -1
          rollCount : 3, // x >= 0
          duration : 3, //(x second)
          stopCallback : function() {
          },
          startCallback : function() {
          },
          slowDownCallback : function() {
          }
        }
        var defaultProperty = {
          playCount : 0,
          $rouletteTarget : null,
          imageCount : null,
          $images : null,
          originalStopImageNumber : null,
          totalHeight : null,
          topPosition : 0,

          maxDistance : null,
          slowDownStartDistance : null,

          isRunUp : true,
          isSlowdown : false,
          isStop : false,

          distance : 0,
          runUpDistance : null,
          slowdownTimer : null,
          isIE : navigator.userAgent.toLowerCase().indexOf('msie') > -1 // TODO IE
        };
        var p = $.extend({}, defaultSettings, options, defaultProperty);

        var reset = function() {
          p.maxDistance = defaultProperty.maxDistance;
          p.slowDownStartDistance = defaultProperty.slowDownStartDistance;
          p.distance = defaultProperty.distance;
          p.isRunUp = defaultProperty.isRunUp;
          p.isSlowdown = defaultProperty.isSlowdown;
          p.isStop = defaultProperty.isStop;
          p.topPosition = defaultProperty.topPosition;

          clearTimeout(p.slowDownTimer);
        }

        var slowDownSetup = function() {
          if(p.isSlowdown){
            return;
          }
          p.slowDownCallback();
          p.isSlowdown = true;
          p.slowDownStartDistance = p.distance;
          p.maxDistance = p.distance + (2*p.totalHeight);
          p.maxDistance += p.imageHeight - p.topPosition % p.imageHeight;
          if (p.stopImageNumber != null) {
            p.maxDistance += (p.totalHeight - (p.maxDistance % p.totalHeight) + (p.stopImageNumber * p.imageHeight))
                % p.totalHeight;
          }
        }

        var roll = function() {
          var speed_ = p.speed;
                var rate_
          if (p.isRunUp) {
            if (p.distance <= p.runUpDistance) {
              rate_ = ~~((p.distance / p.runUpDistance) * p.speed);
              speed_ = rate_ + 1;
            } else {
              p.isRunUp = false;
            }

          } else if (p.isSlowdown) {
            rate_ = ~~(((p.maxDistance - p.distance) / (p.maxDistance - p.slowDownStartDistance)) * (p.speed));
            speed_ = rate_ + 1;
          }

          if (p.maxDistance && p.distance >= p.maxDistance) {
            p.isStop = true;
            reset();
            p.stopCallback(p.$rouletteTarget.find('img').eq(p.stopImageNumber));
            return;
          }
          p.distance += speed_;
          p.topPosition += speed_;
          if (p.topPosition >= p.totalHeight) {
            p.topPosition = p.topPosition - p.totalHeight;
          }
          // TODO IE
          if (p.isIE) {
            p.$rouletteTarget.css('top', '-' + p.topPosition + 'px');
          } else {
            // TODO more smooth roll
            p.$rouletteTarget.css('transform', 'translate(0px, -' + p.topPosition + 'px)');
          }
          setTimeout(roll, 1);
        }

        var init = function($roulette) {
          $roulette.css({ 'overflow' : 'hidden' });
          defaultProperty.originalStopImageNumber = p.stopImageNumber;
          if (!p.$images) {
            p.$images = $roulette.find('img').remove();
            p.imageCount = p.$images.length;
            p.$images.eq(0).bind('load',function(){
              p.imageHeight = $(this).height();
              $roulette.css({ 'height' : (p.imageHeight + 'px') });
              p.totalHeight = p.imageCount * p.imageHeight;
              p.runUpDistance = 2 * p.imageHeight;
            }).each(function(){
              if (this.complete || this.complete === undefined){
                var src = this.src;
                // set BLANK image
                this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                this.src = src;
              }
            });
          }
          $roulette.find('div').remove();
          p.$images.css({
            'display' : 'block'
          });
          p.$rouletteTarget = $('<div>').css({
            'position' : 'relative',
            'top' : '0'
          }).attr('class',"roulette-inner");
          $roulette.append(p.$rouletteTarget);
          p.$rouletteTarget.append(p.$images);
          p.$rouletteTarget.append(p.$images.eq(0).clone());
          $roulette.show();
        }

        var start = function() {
          p.playCount++;
          if (p.maxPlayCount && p.playCount > p.maxPlayCount) {
            return;
          }
          p.stopImageNumber = $.isNumeric(defaultProperty.originalStopImageNumber) && Number(defaultProperty.originalStopImageNumber) >= 0 ?
                      Number(defaultProperty.originalStopImageNumber) : Math.floor(Math.random() * p.imageCount);
          p.startCallback();
          roll();
          p.slowDownTimer = setTimeout(function(){
            slowDownSetup();
          }, p.duration * 1000);
        }

        var stop = function(option) {
          if (!p.isSlowdown) {
            if (option) {
              var stopImageNumber = Number(option.stopImageNumber);
              if (0 <= stopImageNumber && stopImageNumber <= (p.imageCount - 1)) {
                p.stopImageNumber = option.stopImageNumber;
              }
            }
            slowDownSetup();
          }
        }
        var option = function(options) {
          p = $.extend(p, options);
          p.speed = Number(p.speed);
          p.duration = Number(p.duration);
          p.duration = p.duration > 1 ? p.duration - 1 : 1;
          defaultProperty.originalStopImageNumber = options.stopImageNumber;
        }

        var ret = {
          start : start,
          stop : stop,
          init : init,
          option : option
        }
        return ret;
      }

      var pluginName = 'roulette';
      $.fn[pluginName] = function(method, options) {
        return this.each(function() {
          var self = $(this);
          var roulette = self.data('plugin_' + pluginName);

          if (roulette) {
            if (roulette[method]) {
              roulette[method](options);
            } else {
              console && console.error('Method ' + method + ' does not exist on jQuery.roulette');
            }
          } else {
            roulette = new Roulette(method);
            roulette.init(self, method);
            $(this).data('plugin_' + pluginName, roulette);
          }
        });
      }
    })($);
  },
  mounted() {
    var option = {
      speed : 10,
      duration : 3,
      stopImageNumber : 0,
      startCallback : function() {
        console.log('start');
      },
      slowDownCallback : function() {
        console.log('slowDown');
      },
      stopCallback : function($stopElm) {
        console.log('stop', $stopElm);
      }
    }
    // void option
    $('div.roulette-carousel__col').roulette(option).roulette('start');	
  }
}
</script>