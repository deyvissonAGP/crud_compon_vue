import Vue from 'vue'
import App from './App.vue'
import TodoCard from './components/TodoCard.vue'
import NovoTodo from './components/NovoTodo.vue'

new Vue({
    el: '#app',
    render: h => h(App)
})