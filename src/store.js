import { createStore } from 'vuex'

const store = createStore({
  state: {
    welcomeText:
      'Investera har aldrig varit enklare. Gör ditt framtida jag en tjänst och börja idag.',
    welcomeTextLower:
      'Ränta på ränta-effekten betyder att sparande kan öka i värde både av ränta på kapitalet och av ränta på tidigare utbetald ränta. Du får alltså ränta på den ränta som ditt sparande har genererat. Läs mer om hur ränta på ränta funkar, lär dig hur du räknar ut effekten och få koll på hur olika sparformer kan påverkas.'
  },
  mutations: {
    changeMainText(state) {
      state.welcomeText =
        'Nu har du testat våran kalkylator. Varför inte slänga iväg ett email till oss nedanför?'
      state.welcomeTextLower = ''
    }
  },
  strict: true
})

export default store
