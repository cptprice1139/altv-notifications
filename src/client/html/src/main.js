import { createApp } from 'vue'
import App from './App.vue'
import FontAwesomeIcon from './utils/fontawesome'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
