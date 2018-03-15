<template>
  <div class="pageContent">
    <nav class="nav">
      <ul>
        <li><a id="home" href="/" class="active">Home</a></li>
        <li><a href="#/series">Series</a></li>
        <li><a href="#/movies">Movies</a></li>
        <li><a href="#/favorites">Favorites</a></li>
      </ul>
    </nav>
    <div class="contentAll">
      <div class="movies content" v-for="movie in movies" :key="movie.index">
        <img :src="movie.img" alt="">
        <h2>{{ movie.name }}</h2>
        <p>{{ movie.category }}</p>
        <p>{{ movie.description }}</p>
      </div>
      <div class="series content" v-for="serie in series" :key="serie.index">
        <img :src="serie.img" alt="">
        <h2>{{ serie.name }}</h2>
        <p>{{ serie.category }}</p>
        <p>{{ serie.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      movies: [
        { name: 'Cloverfield paradox', category: 'Action', description: 'Netflix Original thriller', img: require('../assets/cloverfield.jpg') },
        { name: 'The Simpsons Movie', category: 'Comedy', description: 'Movie of the serie the simpsons', img: require('../assets/simpsons.png') },
        { name: 'Shrek', category: 'Animation', description: 'Green giant with his best friend who is a donkey', img: require('../assets/shrek.jpg') }
      ],
      series: [
        { name: 'The flash', category: 'Action', description: 'The fastest man alive', img: require('../assets/theflash.jpg') },
        { name: 'Dark', category: 'Thriller', description: 'Thriller that is set in the woods of Winden', img: require('../assets/dark.jpg') },
        { name: 'Breaking Bad', category: 'Thriller', description: 'Old teacher that starts making drugs', img: require('../assets/breakingbad.jpg') }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contentAll{
  width: 70%;
  margin: auto;
}
.content{
 width: 33%;
 float: left;
 margin-top: 80px;
}
.content h2{
  text-align: center;
  margin-top: 10px;
}
.content img{
  width: 70%;
  height: 280px;
  margin-left: 15%;
}
</style>
