<template>
  <div class="pageContent">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <Header/>
    <div class="contentAll">
      <div class="detail">
        <img :src="getPic(results.img)" alt="">
        <h2>{{results.name}}</h2>
        <p>{{results.genre}} | {{results.type}} | {{results.duration}} min |
          <a :href="getUrl(results.id)" v-on:click="unFavorite" v-if='results.favorite === "true"'><i class="material-icons" style="color:#e4e227;">favorite</i></a>
          <a :href="getUrl(results.id)" v-else v-on:click="Favorite"><i class="material-icons" style="color:grey;">favorite</i></a></p>
        <p id="description">{{results.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './header.vue'
export default {
  name: 'Detail',
  components:{
    Header
  },
  data () {
    return {
      results: []
    }
  },
  mounted () {
    this.getMedia(this.$route.params.id)
  },
  methods: {
    getMedia (id) {
      console.log(id);
      axios.get('http://localhost/www/api/public/media/' + id)
        .then(response => { this.results = response.data })
        .catch(error => { console.log(error) })
    },
    getUrl(id){
      return '#/detail/'+id
    },
    getPic (img) {
      return require('../assets/' + img)
    },
    unFavorite(){
      axios.post('http://localhost/www/api/public/update/' + this.$route.params.id, { favorite: 'false' })
        .then(function(response){
      })
    },
    Favorite(){
      axios.post('http://localhost/www/api/public/update/' + this.$route.params.id, { favorite: 'true' })
        .then(function(response){
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  float: left;
  width: 270px;
  height: 350px;
  margin-right: 40px;
}
.detail{
  margin-top: 80px;
}
#description{
  margin-top: 40px;
}
</style>
