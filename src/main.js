import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
// import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue,
    secondary: colors.lime,
    accent: colors.orange,
    error: colors.red,
    info: colors.blueGrey,
    infoLight: colors.blueGrey.lighten4,
    success: colors.green,
    warning: colors.orange,
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
