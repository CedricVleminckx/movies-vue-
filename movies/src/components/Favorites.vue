<template>
  <div class="pageContent">
    <nav class="nav">
      <ul>
        <li><a id="home" href="/">Home</a></li>
        <li><a href="#/series">Series</a></li>
        <li><a href="#/movies">Movies</a></li>
        <li><a href="#/favorites" class="active">Favorites</a></li>
      </ul>
    </nav>
    <div class="contentAll">
      <div class="content" v-for="media in results" v-if="media.favorite === 'true'" :key="media.index">
        <img class="movie" v-if="media.type === 'movie'" :src="getPic(media.img)" alt="">
        <img class="serie" v-if="media.type === 'serie'" :src="getPic(media.img)" alt="">
        <h2>{{ media.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Favorites',
  data () {
    return {
      results: []
    }
  },
  mounted () {
    this.getMovies()
  },
  methods: {
    getMovies () {
      axios.get('http://localhost/www/api/public/movies')
        .then(response => { this.results = response.data })
        .catch(error => { console.log(error) })
    },
    getPic (img) {
      return require('../assets/' + img)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contentAll{
  width: 70%;
  margin: auto;
  margin-top: 40px;
}
.content{
 width: 33%;
 float: left;
 margin-top: 30px;
}
.content h2{
  text-align: center;
}
.content img{
  width: 70%;
  height: 280px;
  margin-left: 15%;
}
.nav .active {
    background-color: #e4e227;
}
</style>
