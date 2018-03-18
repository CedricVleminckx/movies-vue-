<template>
    <nav class="nav">
      <ul>
        <li><a v-if="active === 'header'" id="home" href="/" class="activeH">Home</a> <a v-else id="home" href="/">Home</a></li>
        <li><a v-if="active === 'serie'" href="#/series" class="activeS">Series</a><a v-else href="#/series">Series</a></li>
        <li><a v-if="active === 'movie'" href="#/movies" class="activeM">Movies</a><a v-else href="#/movies">Movies</a></li>
        <li><a v-if="active === 'favorite'" href="#/favorites" class="activeF">Favorites</a><a v-else href="#/favorites">Favorites</a></li>
        <input class="searchBox" v-on="listen" type="text" v-model="search" placeholder="Search media"/>
      </ul>
    </nav>
</template>

<script>
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
.nav .activeH {
    background-color: #2591ed;
}
.nav .activeS {
    background-color: #ed2525;
}
.nav .activeM {
    background-color: #31d51d;
}
.nav .activeF {
    background-color: #e4e227;
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
