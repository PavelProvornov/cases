<template>
    <div class="header">
        <div class="header__top-bar top-bar">
            <nav class="top-bar__nav nav">
                <ul class="nav__list">
                    <router-link tag="li" class="nav__list-item" to="/" exact>
                        <a href="" class="nav__list-item--link">Главная</a>
                    </router-link>
                    <router-link tag="li" class="nav__list-item" to="/faq" exact>
                        <a href="" class="nav__list-item--link">Faq</a>
                    </router-link>
                    <router-link tag="li" class="nav__list-item" to="/trade" exact>
                        <a href="" class="nav__list-item--link">Livetrade</a>
                    </router-link>
                    <router-link tag="li" class="nav__list-item" to="/contacts" exact>
                        <a href="" class="nav__list-item--link">Контакты</a>
                    </router-link>
                </ul>
            </nav>
            <div class="top-bar__user-bar user-bar">
                <div class="user-bar__lang">
                <span class="user-bar__lang--selected" @click="langShown = !langShown">Ru</span>
                <ul v-if="langShown" class="user-bar__lang-option" style="display: block">
                    <li class="user-bar__lang-option-item">Ru</li>
                    <li class="user-bar__lang-option-item">Eng</li>
                </ul>
                </div>
                <div class="user-bar__social">
                    <a class="user-bar__social-item social-vk" v-if="$root.user === null" href="/auth/vk"></a>
                    <a href="" class="user-bar__social-item social-tg"></a>
                    <a href="" class="user-bar__social-item social-tw"></a>
                    <a class="user-bar__social-item social-fb" v-if="$root.user === null" href="/auth/fb"></a>
                    <a class="user-bar__social-item social-st" v-if="$root.user === null" href="/auth/steam"></a>
                </div>
                <div class="user-bar__avatar" v-if="$root.user">
                    <div class="user-bar__avatar-wrapper">
                        <img :src="$root.user.avatar || ''" alt="" class="user-bar__avatar-item">
                    </div>
                </div>
                <div class="user-bar__info"  v-if="$root.user">
                    <div class="user-bar__info-row">
                        <router-link style="cursor: pointer" to="/profile" tag="p" class="user-bar__info-name">
                            {{$root.user.username || 'username'}}
                        </router-link>
                        <button class="logout-btn"></button>
                    </div>
                    <div class="user-bar__info-row">
                        <p class="user-bar__info-balance">
                        Баланс:
                        <span class="balance">{{ $root.user.balance  }} {{ $root.getCurrency() }}</span>
                        </p>
                        <button class="balance-replenish" @click="$root.openFill"></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__bottom-bar bottom-bar">
            <div class="bottom-bar__stats daily-stats">
                <div class="daily-stats__item">
                <div class="daily-stats__item-image">
                    <i class="daily-stats__icon icon-case"></i>
                </div>
                <div class="daily-stats__item-content">
                    <p class="daily-stats__item-amount">{{stats.opens}}</p>
                    <p class="daily-stats__item-title">кейсов открыто</p>
                </div>
                </div>
                <div class="daily-stats__item">
                <div class="daily-stats__item-image">
                    <i class="daily-stats__icon icon-user"></i>
                </div>
                <div class="daily-stats__item-content">
                    <p class="daily-stats__item-amount">{{stats.users}}</p>
                    <p class="daily-stats__item-title">Пользователей</p>
                </div>
                </div>
                <div class="daily-stats__item">
                <div class="daily-stats__item-image">
                    <i class="daily-stats__icon icon-dot"></i>
                </div>
                <div class="daily-stats__item-content">
                    <p class="daily-stats__item-amount">{{stats.online}}</p>
                    <p class="daily-stats__item-title">Онлайн</p>
                </div>
                </div>
                <div class="daily-stats__item">
                <div class="daily-stats__item-image">
                    <i class="daily-stats__icon icon-dollar"></i>
                </div>
                <div class="daily-stats__item-content">
                    <p class="daily-stats__item-amount">{{stats.users}}$</p>
                    <p class="daily-stats__item-title">Вещей на сумму</p>
                </div>
                </div>
                <div class="daily-stats__item">
                <div class="daily-stats__item-image">
                    <i class="daily-stats__icon icon-medal"></i>
                </div>
                <div class="daily-stats__item-content">
                    <p class="daily-stats__item-amount">{{stats.topskin}}$</p>
                    <p class="daily-stats__item-title">Самый дорогой скин</p>
                </div>
                </div>
            </div>
            <div class="bottom-bar__promo promo-info">
                <div class="promo-info__terms">
                <p class="promo-info__title">Промокод</p>
                <p class="promo-info__description">+10 к пополнению</p>
                </div>
                <div class="promo-info__code">
                <p class="code-item">{{$root.modal.promocode}}</p>
                <button class="flag-icon"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            langShown: false
        }
    },
    props: {
        stats: Object
    }
}
</script>