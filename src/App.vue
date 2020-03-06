<template>
  <div id="app">
    <section class="hero is-primary is-bold is-fullheigth"> 
      
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                Exemplo com VUEjs
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">{{msg}}</h1>
        </div>
      </div>

      <div class="hero-foot">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong>VUEjs tutorial componentes</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      msg : 'ola mundo do VUE'
    }
  }
}
</script>

<style>

</style>