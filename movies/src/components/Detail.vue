<template>
  <div class="content">
    <nav class="nav">
      <ul>
        <li><a id="home" href="/">Home</a></li>
        <li><a href="#/series" class="active">Series</a></li>
        <li><a href="#/movies">Movies</a></li>
        <li><a href="#/favorites">Favorites</a></li>
      </ul>
    </nav>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      title: 'Joepie het werkt'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: red;
}
</style>
