<template>
    <nav class="nav">
      <ul>
        <li><a id="home" href="/" class="active">Home</a></li>
        <li><a href="#/series">Series</a></li>
        <li><a href="#/movies">Movies</a></li>
        <li><a href="#/favorites">Favorites</a></li>
        <input class="searchBox" v-on="listen" type="text" v-model="search" placeholder="Search media"/>
      </ul>
    </nav>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      search: ''
    }
  },
  props: {
    active: {
      type: String,
      required: true
    }
  },
  computed: {
    listen(){
      this.$emit('update', this.search)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav .active {
    background-color: #2591ed;
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
