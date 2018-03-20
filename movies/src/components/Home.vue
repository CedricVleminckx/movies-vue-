<template>
  <div class="pageContent">
    <i v-if="isList" v-on:click="isList = !isList" class="material-icons">view_module</i>
    <i v-if="!isList" v-on:click="isList = !isList" class="material-icons">list</i>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <Header :active="active" :isSearch="isSearch" @update="getHeaderSearch"/>
    <div class="contentAll">
      <div class="content" v-bind:class="{ active: isList }" v-for="media in SearchMedia" :key="media.index">
        <a :href="getUrl(media.id)"><img class="movie" v-if="media.type === 'movie'" :src="getPic(media.img)" alt=""></a>
        <a :href="getUrl(media.id)"><img class="serie" v-if="media.type === 'serie'" :src="getPic(media.img)" alt=""></a>
        <h2><a :href="getUrl(media.id)">{{ media.name }}</a></h2>
        <p v-if="isList">{{media.genre}} | {{media.type}} | {{media.duration}} min</p>
        <p v-if="isList">{{getDescription(media.description)}}</p>
        <a :href="getUrl(media.id)" v-if="isList" class="button">Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './header.vue'
export default {
  name: 'Home',
  components: {
    Header
  },
  data () {
    return {
      results: [],
      search: '',
      active: 'header',
      isSearch: 'true',
      isList: false
    }
  },
  mounted () {
    this.getMedia()
  },
  methods: {
    getMedia () {
      axios.get('http://cedricvleminckx.ikdoeict.be/media')
        .then(response => { this.results = response.data })
        .catch(error => { console.log(error) })
    },
    getPic (img) {
      return require('../assets/' + img)
    },
    getUrl (id) {
      return '#/detail/' + id
    },
    filter () {
      this.results.sort(function (a, b) {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
    },
    getHeaderSearch (value) {
      this.search = value
    },
    getDescription (str) {
      return str.substring(0, 300) + '...'
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
.active{
  width: 100%;
  float: none;
  display: inline-block;
}
.active img{
  width: 20%;
  height: 200px;
  margin-left: 0;
  float: left;
  margin-right: 20px;
}
.active h2{
  text-align: left;
  margin-bottom: 10px;
}
.active p+p{
  margin-top: 20px;
}
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    float: right;
}
.button a{
  text-decoration: none;
  color: white;
}
.content{
  margin-top: 60px;
}
i{
  font-size: 40px;
  cursor: pointer;
  float: right;
}
</style>
