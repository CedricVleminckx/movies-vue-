<template>
  <div class="pageContent">
    <Header :active="active" :isSearch="isSearch" @update="getHeaderSearch"/>
    <div class="contentAll">
      <div class="content" v-for="media in SearchMedia" v-if="media.type === 'serie'" :key="media.index">
        <a :href="getUrl(media.id)"><img class="movie" v-if="media.type === 'movie'" :src="getPic(media.img)" alt=""></a>
        <a :href="getUrl(media.id)"><img class="serie" v-if="media.type === 'serie'" :src="getPic(media.img)" alt=""></a>
        <h2><a :href="getUrl(media.id)">{{ media.name }}</a></h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './header.vue'
export default {
  name: 'Series',
  components:{
    Header
  },
  data () {
    return {
      results: [],
      search: '',
      active: "serie",
      isSearch: 'true'
    }
  },
  mounted () {
    this.getMovies()
  },
  methods: {
    getMovies () {
      axios.get('http://localhost/www/api/public/media')
        .then(response => { this.results = response.data })
        .catch(error => { console.log(error) })
    },
    getPic (img) {
      return require('../assets/' + img)
    },
    getUrl(id){
      return '#/detail/'+id
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
