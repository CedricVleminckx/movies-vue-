<template>
  <div class="pageContent">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <div class="contentAll">
      <div class="detail">
        <img :src="getPic(results.img)" alt="">
        <h2>{{results.name}}</h2>
        <p>{{results.genre}} | {{results.type}} | {{results.duration}} min |
          <a :href="getUrlFavo(results.id)" v-on:click="unFavorite" v-if='isfavorite === "true"'><i class="material-icons">favorite</i></a>
          <a :href="getUrlFavo(results.id)" v-on:click="Favorite" v-else><i class="material-icons">favorite_border</i></a>
        </p>
        <p id="description">{{results.description}}</p>
      </div>
      <md-button :href="getUrlEdit(results.id)" class="md-raised md-primary">Edit</md-button>
      <form novalidate @submit.stop.prevent="showSnackbar = true">
        <md-button type="submit" class="md-raised md-accent">Delete</md-button>
        <md-snackbar :md-position="center" :md-duration="4000" :md-active.sync="showSnackbar" md-persistent>
          <span>Are you sure you want to delete this?</span>
          <md-button class="md-accent" @click="showSnackbar = false">No</md-button>
          <md-button class="md-primary" @click="showSnackbar = false" v-on:click="deleteClick">Yes</md-button>
      </md-snackbar>
    </form>
    </div>
    <div class="randoms">
      <div class="contentRandoms" v-for="random in randomFiltered">
        <a :href="getUrl(random.id)" v-on:click="reload"><img class="movie" v-if="random.type === 'movie'" :src="getPic(random.img)" alt=""></a>
        <a :href="getUrl(random.id)" v-on:click="reload"><img class="serie" v-if="random.type === 'serie'" :src="getPic(random.img)" alt=""></a>
        <h2><a :href="getUrl(random.id)">{{ random.name }}</a></h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './header.vue'
export default {
  name: 'Detail',
  components: {
    Header
  },
  data () {
    return {
      results: [],
      resultsRandom: [],
      isfavorite: '',
      showSnackbar: false
    }
  },
  mounted () {
    this.getMedia(this.$route.params.id)
    this.getMediaRandom()
  },
  methods: {
    getMedia (id) {
      axios.get('http://cedricvleminckx.ikdoeict.be/media/' + id)
        .then(response => {
          this.results = response.data
          this.isfavorite = this.results.favorite
        })
        .catch(error => { console.log(error) })
    },
    getMediaRandom () {
      axios.get('http://cedricvleminckx.ikdoeict.be/random')
        .then(response => {
          this.resultsRandom = response.data
        })
    },
    getPic (img) {
      return require('../assets/' + img)
    },
    getUrl (id) {
      return '#/detail/' + id
    },
    getUrlFavo (id) {
      return '#/detail/' + id
    },
    getUrlEdit (id) {
      return '#/edit/' + id
    },
    getPic (img) {
      return require('../assets/' + img)
    },
    unFavorite () {
      this.isfavorite = 'false'
      axios.post('http://cedricvleminckx.ikdoeict.be/update/' + this.$route.params.id, { favorite: 'false' })
        .then(function (response) {
        })
    },
    Favorite () {
      this.isfavorite = 'true'
      axios.post('http://cedricvleminckx.ikdoeict.be/update/' + this.$route.params.id, { favorite: 'true' })
        .then(function (response) {
        })
    },
    deleteClick () {
      axios.post('http://cedricvleminckx.ikdoeict.be/delete/' + this.$route.params.id)
        .then(response => {
          this.$router.push('/Home')
        })
    },
    reload() {
      location.reload();
    }
  },
  computed: {
    randomFiltered () {
      return this.resultsRandom.slice(0, 3)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration: none;
  color: white;
}
img{
  float: left;
  width: 270px;
  height: 350px;
  margin-right: 40px;
}
.detail{
  margin-top: 80px;
  width: 80%;
}
#description{
  margin-top: 40px;
}
.randoms{
  display: inline-block;
  width: 70%;
  margin-top: 100px;
  margin-left: 15%;
}
.contentRandoms{
  width: 33%;
  float: left;
}
.contentRandoms a{
  text-decoration: none;
  color: #333;
}
.contentRandoms h2{
  text-align: center;
}
.contentRandoms img{
  width: 220px;
  height: 280px;
  margin-left: 15%;
}
.contentAll{
  margin-left: 13%;
}
</style>
