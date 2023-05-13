import { createApp } from 'vue'
import blankvue from '@blank/vue'
import App from './App.vue'
import router from './router'

import '@blank/vue/style'

const app = createApp(App)

app.use(blankvue)
app.use(router)

app.mount('#app')
