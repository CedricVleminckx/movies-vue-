<template>
  <div class="pageContent">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <div class="contentAll">
      <div class="edit">
        <form v-on:submit.prevent="getFormValues">
          <img :src="getPic(results.img)" alt="">
          <div class="md-layout-item md-layout md-gutter">
            <div class="md-layout-item md-size-22">
              <md-field>
                <label>Name</label>
                <md-input v-model="results.name"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item">
              <md-field>
                <label>Genre</label>
                <md-select v-model="results.genre">
                  <md-option value="Action">Action</md-option>
                  <md-option value="Animation">Animation</md-option>
                  <md-option value="Thriller">Thriller</md-option>
                  <md-option value="Comedy">Comedy</md-option>
                </md-select>
              </md-field>
            </div>
          </div>

          <div class="md-layout-item md-layout md-gutter">
            <div class="md-layout-item md-size-22">
              <md-field>
                <label>Type</label>
                <md-select v-model="results.type">
                  <md-option value="movie">movie</md-option>
                  <md-option value="serie">serie</md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item md-size-22">
              <md-field>
                <label>Favorite</label>
                <md-select v-model="results.favorite">
                  <md-option value="true">true</md-option>
                  <md-option value="false">false</md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item">
              <md-field>
                <label>Duration</label>
                <md-input v-model="results.duration"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout-item md-layout md-gutter">
            <div class="md-layout-item">
              <md-field class="description">
                <label>Description</label>
                <md-textarea md-autogrow v-model="results.description"></md-textarea>
              </md-field>
            </div>
          </div>
        </form>
      </div>

      <md-button v-on:click="editClick" class="md-raised md-primary">Save</md-button>
      <md-button v-on:click="cancelClick" href="#" class="md-raised md-accent">Cancel</md-button>
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
      test: 'serie'
    }
  },
  mounted () {
    this.getMedia(this.$route.params.id)
  },
  methods: {
    getMedia (id) {
      axios.get('http://cedricvleminckx.ikdoeict.be/media/' + id)
        .then(response => {
          this.results = response.data
        })
        .catch(error => { console.log(error) })
    },
    getPic (img) {
      return require('../assets/' + img)
    },
    editClick () {
      axios.post('http://cedricvleminckx.ikdoeict.be/update/' + this.$route.params.id, {
        name: this.results.name,
        description: this.results.description,
        genre: this.results.genre,
        type: this.results.type,
        duration: this.results.duration,
        favorite: this.results.favorite
      }).then(response => {
        this.$router.push('/detail/' + this.results.id)
      })
    },
    cancelClick () {
      this.$router.push('/detail/' + this.results.id)
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
.edit{
  margin-top: 80px;
}
.md-field{
  width: 200px;
}
.description{
  width: 700px;
}
.contentAll{
  margin-left: 13%;
  width: 70%;
}
.md-button{
  float: right;
}
</style>
