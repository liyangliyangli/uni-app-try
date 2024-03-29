import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'

import store from './store'

Vue.config.productionTip = false  //阻止启动生产消息，常用作指令

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)


App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()//用来挂载的
