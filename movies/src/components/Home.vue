<template>
  <div class="pageContent">
    <Header :active="active" @update="getHeaderSearch"/>
    <div class="contentAll">
      <div class="content" v-for="media in SearchMedia" :key="media.index">
        <img class="movie" v-if="media.type === 'movie'" :src="getPic(media.img)" alt="">
        <img class="serie" v-if="media.type === 'serie'" :src="getPic(media.img)" alt="">
        <h2>{{ media.name }}</h2>
      </div>
      <button v-on:click="filter">filter</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './header.vue'
export default {
  name: 'Home',
  components:{
    Header
  },
  data () {
    return {
      results: [],
      search: '',
      active: "header"
    }
  },
  mounted () {
    this.getMedia()
  },
  methods: {
    getMedia () {
      axios.get('http://localhost/www/api/public/movies')
        .then(response => { this.results = response.data })
        .catch(error => { console.log(error) })
    },
    getPic (img) {
      return require('../assets/' + img)
    },
    filter(){
      this.results.sort(function(a, b){
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
      })
    },
    getHeaderSearch(value){
      this.search = value
    }
  },
  computed: {
    SearchMedia() {
      return this.results.filter(media => {
        return media.name.toLowerCase().includes(this.search.toLowerCase())
      })
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
.searchBox{
  float: right;
  font-size: 16px;
  width: 200px;
  height: 46px;
  border: none;
}
.searchBox:focus{
  height: 44px;
  border: none;
  border-bottom: solid #2591ed;
}
</style>
