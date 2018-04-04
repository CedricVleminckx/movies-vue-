<template>
  <div class="pageContent">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <md-empty-state v-if="SearchMedia.length <= 0"
      md-icon="search"
      class="md-primary"
      md-label="No results found"
      md-description="Suggestions:
      Make sure that all words are spelled correctly.
      Try different keywords.
      Try more general keywords.">
    </md-empty-state>
    <div class="contentAll">
      <div class="content" v-for="media in SearchMedia" v-if="media.favorite === 'true'" :key="media.index">
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
                <md-button :href="getUrlFavo()" v-on:click="unFavorite(media.id)" v-if='media.favorite === "true"' class="md-icon-button md-primary">
                  <md-icon>favorite</md-icon>
                </md-button>
                <md-button :href="getUrlFavo()" v-on:click="Favorite(media.id)" v-else class="md-icon-button md-primary">
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
  name: 'Favorites',
  data () {
    return {
      results: [],
      resultsBack: [],
      isList: false
    }
  },
  props: {
    search: {
      type: String,
      required: false
    },
    filterAl: {
      type: String,
      required: false
    },
    genre: {
      type: String,
      required: false
    }
  },
  mounted () {
    this.getMovies()
  },
  methods: {
    getMovies () {
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
      return '#/Favorites'
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
    },
    Filter () {
      if (this.filterAl === 'az'){
        this.results.sort(function (a, b) {
          if (a.name < b.name) return -1
          if (a.name > b.name) return 1
          return 0
        })
      }
      else if (this.filterAl === 'za') {
        this.results.sort(function (a, b) {
          if (a.name < b.name) return 1
          if (a.name > b.name) return -1
          return 0
        })
      }
    },
    FilterGenre () {
      if (this.genre === 'Action') {
        this.results = this.resultsBack.filter(function (p) { return p.genre == 'Action' })
      }
      else if (this.genre === 'Animation') {
        this.results = this.resultsBack.filter(function (p) { return p.genre == 'Animation' })
      }
      else if (this.genre === 'Comedy') {
        this.results = this.resultsBack.filter(function (p) { return p.genre == 'Comedy' })
      }
      else if (this.genre === 'Thriller') {
        this.results = this.resultsBack.filter(function (p) { return p.genre == 'Thriller' })
      }
      else if (this.genre === 'All') {
        this.results = this.resultsBack
      }
    }
  },
  computed: {
    SearchMedia () {
      this.FilterGenre()
      this.Filter()
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
