<template>
  <div class="pageContent">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <Header/>
    <div class="contentAll">
      <div class="edit">
        <form v-on:submit.prevent="getFormValues">
          <img :src="getPic(results.img)" alt="">
          <p>Name: <input type="text" v-model="results.name"></p>
          <p>Genre:
            <select v-model="results.genre">
              <option>Action</option>
              <option>Animation</option>
              <option>Thriller</option>
              <option>Comedy</option>
            </select>
          </p>

          <p>Type:
            <select v-model="results.type">
              <option>movie</option>
              <option>serie</option>
            </select>
          </p>

          <p>Favorite:
            <select v-model="results.favorite">
              <option>true</option>
              <option>false</option>
            </select>
          </p>

          <p id="dur">Duration in min: <input type="text" v-model="results.duration"></p><br/>

          <p id="des">Description: </p>
          <textarea name="name" rows="11" cols="70" v-model="results.description"></textarea>
        </form>
      </div>

      <p class="button" v-on:click="editClick"><a>Save</a></p>
      <p class="button delete"><a href="#">Cancel</a></p>
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
        .then(response => {
          this.results = response.data

        })
        .catch(error => { console.log(error) })
    },
    getPic (img) {
      return require('../assets/' + img)
    },
    editClick(){
      axios.post('http://localhost/www/api/public/update/' + this.$route.params.id, {
        name: this.results.name,
        description: this.results.description,
        genre: this.results.genre,
        type: this.results.type,
        duration: this.results.duration,
        favorite: this.results.favorite
      })
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
p{
   margin-bottom: 16px;
}
input[type=text], select{
   border: none;
   border-bottom: solid #2591ed;
   height: 30px;
}
textarea{
  display: inline-block;
}
p + p{
  float: left;
  margin-right: 20px;
  display: inline-block;
}
#dur{
  float: none;
}
.edit{
  margin-top: 80px;
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
    margin-top: 20px;
    cursor: pointer;
    float: right;
}
.button:first-of-type{
  margin-right: 53px;
}
.button a{
  text-decoration: none;
  color: white;
}
.delete{
  background-color: #f44336;
}
</style>
