import EN_LOCALE from '~/locales/en'
import PT_LOCALE from '~/locales/pt'

const _ = require('lodash')

export const state = () => ({
  language: 'en',
  languages: {
    en: EN_LOCALE,
    pt: PT_LOCALE,
  },
})

export const mutations = {
  setLanguage(state, lang) {
    state.language = lang
  },
}

export const getters = {
  getText: (state) => (text) => {
    return _.get(state.languages[state.language], text, '')
  },
}
