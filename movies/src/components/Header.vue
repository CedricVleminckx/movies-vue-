<template>
    <nav class="nav">
      <ul>
        <li><a v-if="active === 'header'" id="home" href="/" class="activeH">Home</a> <a v-else id="home" href="/">Home</a></li>
        <li><a v-if="active === 'serie'" href="#/series" class="activeS">Series</a><a v-else href="#/series">Series</a></li>
        <li><a v-if="active === 'movie'" href="#/movies" class="activeM">Movies</a><a v-else href="#/movies">Movies</a></li>
        <li><a v-if="active === 'favorite'" href="#/favorites" class="activeF">Favorites</a><a v-else href="#/favorites">Favorites</a></li>
        <input v-if="isSearch" class="searchBox" v-on="listen" type="text" v-model="search" placeholder="Search media"/>
        <select v-if="isFilter" v-on="listenFilter" v-model="filter">
          <option value="" disabled selected>Select a filter</option>
          <option value="az">a - z</option>
          <option value="za">z - a</option>
          <option value="fav">Favorite first</option>
        </select>
      </ul>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      filter: ''
    }
  },
  props: {
    active: {
      type: String,
      required: false
    },
    isSearch: {
      type: Boolean,
      required: false
    },
    isFilter: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    listen () {
      this.$emit('update', this.search)
    },
    listenFilter () {
      this.$emit('filter', this.filter)
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
select{
  border: none;
  height: 46.5px;
  float: right;
  margin-right: 5px;
}
select:focus{
  border-bottom: solid #2591ed;
}
</style>
