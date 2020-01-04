import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
	dark: false,
	themes: {
		dark: {
		primary: '#0A3953',
		accent: '#FF4081',
		secondary: '#ffe18d',
		success: '#4CAF50',
		info: '#2196F3',
		warning: '#FB8C00',
		error: '#FF5252'
		},
		light: {
		primary: '#0A3953',
		accent: '#e91e63',
		secondary: '#30b1dc',
		success: '#4CAF50',
		info: '#2196F3',
		warning: '#FB8C00',
		error: '#FF5252'
		}
	}
  },
  icons: {
	iconfont: 'mdi',
  },
});
