<template>
  <div class="pageContent">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <Header/>
    <div class="contentAll">
      <div class="detail">
        <img :src="getPic(results.img)" alt="">
        <h2>{{results.name}}</h2>
        <p>{{results.genre}} | {{results.type}} | {{results.duration}} min |
          <a :href="getUrl(results.id)" v-on:click="unFavorite" v-if='isfavorite === "true"'><i class="material-icons" style='color: #e4e227'>favorite</i></a>
          <a :href="getUrl(results.id)" v-on:click="Favorite" v-else><i class="material-icons">favorite</i></a>
        </p>
        <p id="description">{{results.description}}</p>
      </div>
      <p class="button"><a :href="getUrl(results.id)">Edit</a></p>
      <p class="button delete"><a href="#">Delete</a></p>
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
      results: [],
      isfavorite: ''
    }
  },
  mounted () {
    this.getMedia(this.$route.params.id)
  },
  methods: {
    getMedia (id) {
      console.log(id);
      axios.get('http://localhost/www/api/public/media/' + id)
        .then(response => {
          this.results = response.data
          this.isfavorite = this.results.favorite
        })
        .catch(error => { console.log(error) })
    },
    getUrl(id){
      return '#/edit/' + id
    },
    getPic (img) {
      return require('../assets/' + img)
    },
    unFavorite(){
      this.isfavorite = 'false'
      axios.post('http://localhost/www/api/public/update/' + this.$route.params.id, { favorite: 'false' })
        .then(function(response){
      })
    },
    Favorite(){
      this.isfavorite = 'true'
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
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    margin-top: 65px;
    cursor: pointer;
}
.button a{
  text-decoration: none;
  color: white;
}
.delete{
  background-color: #f44336;
}
</style>
