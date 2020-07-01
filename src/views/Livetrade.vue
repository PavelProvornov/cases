<template>
    <div class="live-trade">
          <h1 class="content-title">live-trade</h1>
          <div class="live-trade__table trade-table">
            <div class="trade-table__row trade-table__header">
              <div class="trade-table__col">
                <h4 class="trade-table__header-text">
                  Пользователь
                </h4>
              </div>
              <div class="trade-table__col">
                <h4 class="trade-table__header-text">
                  Предмет
                </h4>
              </div>
              <div class="trade-table__col">
                <h4 class="trade-table__header-text">
                  Время
                </h4>
              </div>
            </div>
            <!-- content -->
            <div class="trade-table__row">
              <div class="trade-table__col">
                <div class="user-avatar">
                  <div class="user-avatar__avatar">
                    <div class="user-avatar__avatar-wrapper">
                      <img src="@/assets/avatar.jpg" alt="" class="user-avatar__avatar-image">
                    </div>
                  </div>
                  <p class="user-avatar__username">Юзер</p>
                </div>
              </div>
              <div class="trade-table__col">
                <div class="weapon-container">
                  <div class="weapon-container-item rare-purple">
                    <span class="weapon-container-item--arrow"></span>
                    <img src="@/assets/gunExample.png" alt="" class="weapon-container__image">
                  </div>
                </div>
              </div>
              <div class="trade-table__col">
                <p class="time">15 минут назад</p>
              </div>
            </div>

            <div class="trade-table__row">
              <div class="trade-table__col">
                <div class="user-avatar">
                  <div class="user-avatar__avatar">
                    <div class="user-avatar__avatar-wrapper">
                      <img src="@/assets/avatar.jpg" alt="" class="user-avatar__avatar-image">
                    </div>
                  </div>
                  <p class="user-avatar__username">Юзер</p>
                </div>
              </div>
              <div class="trade-table__col">
                <div class="weapon-container">
                  <div class="weapon-container-item rare-yellow">
                    <span class="weapon-container-item--arrow"></span>
                    <img src="@/assets/gunExample.png" alt="" class="weapon-container__image">
                  </div>
                </div>
              </div>
              <div class="trade-table__col">
                <p class="time">15 минут назад</p>
              </div>
            </div>

            <div class="trade-table__row">
              <div class="trade-table__col">
                <div class="user-avatar">
                  <div class="user-avatar__avatar">
                    <div class="user-avatar__avatar-wrapper">
                      <img src="@/assets/avatar.jpg" alt="" class="user-avatar__avatar-image">
                    </div>
                  </div>
                  <p class="user-avatar__username">Юзер</p>
                </div>
              </div>
              <div class="trade-table__col">
                <div class="weapon-container">
                  <div class="weapon-container-item rare-basic">
                    <span class="weapon-container-item--arrow"></span>
                    <img src="@/assets/gunExample.png" alt="" class="weapon-container__image">
                  </div>
                </div>
              </div>
              <div class="trade-table__col">
                <p class="time">15 минут назад</p>
              </div>
            </div>
          </div>
        </div>
</template>