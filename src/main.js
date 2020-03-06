import Vue from 'vue'
import App from './App.vue'
import TodoCard from './components/TodoCard.vue'
import NovoTodo from './components/NovoTodo.vue'
import TodoList from './components/TodoList.vue'

new Vue({
    el: '#app',
    render: h => h(App)
})