import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { default as messages } from './locale/en.json';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en: messages },
});

const loadedLocales = ['en'];

export const loadLocaleAsync = locale => {
  if (loadedLocales.includes(locale)) {
    return Promise.resolve(locale);
  }

  return import(
    /* webpackChunkName: "widget-locale-[request]" */ `./locale/${locale}.json`
  ).then(i18nMessage => {
    loadedLocales.push(locale);
    i18n.setLocaleMessage(locale, i18nMessage.default);
    Promise.resolve(locale);
  });
};
