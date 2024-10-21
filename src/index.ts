import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createWebHashHistory, createRouter } from 'vue-router'
import { routes } from './router'

const router = createRouter({
  history: createWebHashHistory(), // createWebHistory((window as any)._ROUTER_BASE), //
  routes,
});

createApp(App).use(router).mount('#root');
