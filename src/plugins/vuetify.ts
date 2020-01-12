import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
        dark: {
        primary: '#0A3953',
        // tslint:disable-next-line: object-literal-sort-keys
        accent: '#FF4081',
        secondary: '#ffe18d',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252'
        },
        light: {
        primary: '#0A3953',
        // tslint:disable-next-line: object-literal-sort-keys
        accent: '#e91e63',
        secondary: '#30b1dc',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252'
        }
    }
  },
  // tslint:disable-next-line: object-literal-sort-keys
  icons: {
    iconfont: 'mdi',
  },
});
