<template>
  <div class="pageContent">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <div class="contentAll">
      <div class="content" v-for="media in SearchMedia" :key="media.index">
        <md-card>
          <md-card-media>
            <a :href="getUrl(media.id)"><img class="movie" v-if="media.type === 'movie'" :src="getPic(media.img)" alt=""></a>
            <a :href="getUrl(media.id)"><img class="serie" v-if="media.type === 'serie'" :src="getPic(media.img)" alt=""></a>
          </md-card-media>

          <md-card-header>
            <div class="md-title"><a :href="getUrl(media.id)">{{ media.name }}</a></div>
          </md-card-header>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <div>
                <md-button :href="getUrlFavo()" v-on:click="unFavorite(media.id)" v-if='media.favorite === "true"' class="md-icon-button">
                  <md-icon>favorite</md-icon>
                </md-button>
                <md-button :href="getUrlFavo()" v-on:click="Favorite(media.id)" v-else class="md-icon-button">
                  <md-icon>favorite_border</md-icon>
                </md-button>
              </div>

              <md-button :href="getUrl(media.id)">Read more</md-button>
            </md-card-actions>
          </md-card-expand>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      results: [],
      resultsBack: [],
      search: '',
      isList: false,
    }
  },
  mounted () {
    this.getMedia()
  },
  methods: {
    getMedia () {
      axios.get('http://cedricvleminckx.ikdoeict.be/media')
        .then(response => {
          this.results = response.data
          this.resultsBack = response.data
        })
        .catch(error => { console.log(error) })
    },
    getPic (img) {
      return require('../assets/' + img)
    },
    getUrl (id) {
      return '#/detail/' + id
    },
    getUrlFavo () {
      return '#/Home'
    },
    filter (value) {
      if (value === 'az'){
        this.results.sort(function (a, b) {
          if (a.name < b.name) return -1
          if (a.name > b.name) return 1
          return 0
        })
      }
      else if (value === 'za') {
        this.results.sort(function (a, b) {
          if (a.name < b.name) return 1
          if (a.name > b.name) return -1
          return 0
        })
      }
      else if (value === 'fav') {
        this.results.sort(function (a, b) {
          if (a.favorite < b.favorite) return 1
          if (a.favorite > b.favorite) return -1
          return 0
        })
      }
    },
    filterGenre (genre) {
      if (genre === 'Action') {
        this.results = this.resultsBack.filter(function (p) { return p.genre == genre })
      }
      else if (genre === 'Animation') {
        this.results = this.resultsBack.filter(function (p) { return p.genre == genre })
      }
      else if (genre === 'Comedy') {
        this.results = this.resultsBack.filter(function (p) { return p.genre == genre })
      }
      else if (genre === 'Thriller') {
        this.results = this.resultsBack.filter(function (p) { return p.genre == genre })
      }
      else if (genre === 'All') {
        this.results = this.resultsBack
      }
    },
    getHeaderSearch (value) {
      this.search = value
    },
    getDescription (str) {
      return str.substring(0, 300) + '...'
    },
    unFavorite (id) {
      axios.post('http://cedricvleminckx.ikdoeict.be/update/' + id, { favorite: 'false' })
        .then(function (response) {
        })
    },
    Favorite (id) {
      axios.post('http://cedricvleminckx.ikdoeict.be/update/' + id, { favorite: 'true' })
        .then(function (response) {
        })
    }
  },
  computed: {
    SearchMedia () {
      return this.results.filter(media => {
        return media.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-card {
  width: 250px;
  min-height: 450px;
  margin:4px;
  margin-right: 20px;
  margin-top: 20px;
  display: inline-block;
  vertical-align: top;
  float: left;
}
.md-card img{
  height: 250px;
}
.md-title a{
  text-decoration: none;
  color: black;
}
</style>
