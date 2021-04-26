<template>
  <div id="app" class="app-wrapper app-root">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <woot-snackbar-box />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import WootSnackbarBox from './components/SnackbarContainer';
import { accountIdFromPathname } from './helper/URLHelper';
import { loadLocaleAsync } from 'shared/initializers/i18n';
export default {
  name: 'App',

  components: {
    WootSnackbarBox,
  },

  computed: {
    ...mapGetters({
      getAccount: 'accounts/getAccount',
    }),
  },

  mounted() {
    this.$store.dispatch('setUser');
    this.setLocale(window.chatwootConfig.selectedLocale);
    this.initializeAccount();
  },

  methods: {
    async setLocale(locale) {
      try {
        await loadLocaleAsync(locale, 'web');
        this.$root.$i18n.locale = locale;
      } catch (error) {
        // Ignore error
      }
    },

    async initializeAccount() {
      const { pathname } = window.location;
      const accountId = accountIdFromPathname(pathname);

      if (accountId) {
        await this.$store.dispatch('accounts/get');
        const { locale } = this.getAccount(accountId);
        this.setLocale(locale);
      }
    },
  },
};
</script>

<style lang="scss">
@import './assets/scss/app';
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
