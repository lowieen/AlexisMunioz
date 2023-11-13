import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { IonIcon } from '@ionic/vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.component('IonIcon', IonIcon);

app.mount('#app')
