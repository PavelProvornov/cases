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