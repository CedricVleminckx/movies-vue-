<template>
  <div class="pageContent">
    <Header :active="active" :isSearch="isSearch" @update="getHeaderSearch"/>
    <div class="contentAll">
      <div class="content" v-for="media in SearchMedia" :key="media.index">
        <a :href="getUrl(media.id)"><img class="movie" v-if="media.type === 'movie'" :src="getPic(media.img)" alt=""></a>
        <a :href="getUrl(media.id)"><img class="serie" v-if="media.type === 'serie'" :src="getPic(media.img)" alt=""></a>
        <h2><a :href="getUrl(media.id)">{{ media.name }}</a></h2>
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
      active: "header",
      isSearch: 'true'
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
    getUrl(id){
      return '#/detail/'+id
    },
    filter(){
      this.results.sort(function(a, b){
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
      })
    },
    apiUpdate(){
      axios.post('http://cedricvleminckx.ikdoeict.be/update', { name: 'The cloverfield paradox' })
        .then(function(response){
      console.log('saved successfully')
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

</style>
