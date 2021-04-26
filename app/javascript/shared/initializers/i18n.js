import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
});

const loadedLocales = [];

const getWidgetLocaleFiles = locale =>
  import(
    /* webpackChunkName: "widget-locale-[request]" */ `../../widget/i18n/locale/${locale}.json`
  );

const getDashboardLocaleFiles = locale =>
  import(
    /* webpackChunkName: "locale-[request]" */ `../../dashboard/i18n/locale/${locale}/index.js`
  );

export const loadLocaleAsync = (locale, type = 'widget') => {
  if (loadedLocales.includes(locale)) {
    return Promise.resolve(locale);
  }

  const localeFilesChunkLoader =
    type === 'widget'
      ? getWidgetLocaleFiles(locale)
      : getDashboardLocaleFiles(locale);

  return localeFilesChunkLoader
    .then(i18nMessage => {
      loadedLocales.push(locale);
      i18n.setLocaleMessage(locale, i18nMessage.default);
      Promise.resolve(locale);
    })
    .catch(() => {});
};
