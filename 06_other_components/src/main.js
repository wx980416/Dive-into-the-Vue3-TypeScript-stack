import { createApp } from 'vue';
import App from './03_自定义指令/App.vue';
import regisertDirectives from './directives/index';
import plugins_object from './Plugins/plugins_object';
import plugins_functions from './Plugins/plugins_functions';

const app = createApp(App);
regisertDirectives(app);

app.use(plugins_object);
app.use(plugins_functions);
// 自定义全局指令
// app.directive('focus', {
//   mounted(el) {
//     console.log('focus mounted');
//     console.log(el);
//     el.focus();
//   },
// });
// app.directive('focus', {
//   mounted(el) {
//     console.log('focus mounted');
//     console.log(el);
//     el.focus();
//   },
// });

app.mount('#app');

// createApp(App).mount('#app');
