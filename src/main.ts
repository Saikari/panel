import App from './App.vue';
import { createApp } from 'vue';
import router from './router';

const app = new App({
  target: document.querySelector('#app')
});
app.use(router);
app.mount('#app');


export default app;
