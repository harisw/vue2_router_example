// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import vue instance
import Vue from 'vue'
//import the App component
import App from './App'
import Hello from './components/Hello.vue'
import About from './components/About.vue'

//import the vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//define my routes
const routes = [
    { path: '/', component: Hello },
    { path: '/about', component: About }
]

//We can define additional options here
const router = new VueRouter({
    routes,
    mode: 'history'
})

Vue.config.productionTip = false

//Instantiate the vue instance

/* eslint-disable no-new */
new Vue({
    //define the selector for the root component
    el: '#app',
    //pass the template to the root component
    template: '<App/>',
    //declare components that the root components can access
    components: { App },
    //pass in the router to the Vue instance
    router
}).$mount('#app') // mount the router to the app