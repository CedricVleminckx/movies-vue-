<template>
    <nav class="nav">
      <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title" v-if="$route.path === '/Home'">Home page</span>
        <span class="md-title" v-if="$route.path === '/Series'">Series</span>
        <span class="md-title" v-if="$route.path === '/Movies'">Movies</span>
        <span class="md-title" v-if="$route.path === '/Favorites'">Favorites</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>local_movies</md-icon>
            <span class="md-list-item-text"><a @click="toggleMenu" href="#/Home">Home</a></span>
          </md-list-item>

          <md-list-item>
            <md-icon>weekend</md-icon>
            <span class="md-list-item-text"><a @click="toggleMenu" href="#/Series">Series</a></span>
          </md-list-item>

          <md-list-item>
            <md-icon>movie</md-icon>
            <span class="md-list-item-text"><a @click="toggleMenu" href="#/Movies">Movies</a></span>
          </md-list-item>

          <md-list-item>
            <md-icon>favorite</md-icon>
            <span class="md-list-item-text"><a @click="toggleMenu" href="#/Favorites">Favorites</a></span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
      <!--<ul>
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
        <select v-if="isFilter" v-on="listenGenre" v-model="genre">
          <option value="" disabled selected>Select a genre</option>
          <option value="All">All genres</option>
          <option value="Action">Action</option>
          <option value="Animation">Animation</option>
          <option value="Comedy">Comedy</option>
          <option value="Thriller">Thriller</option>
        </select>
      </ul>-->
    </nav>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      filter: '',
      genre: '',
      menuVisible: false
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
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  },
  computed: {
    listen () {
      this.$emit('update', this.search)
    },
    listenFilter () {
      this.$emit('filter', this.filter)
    },
    listenGenre () {
      this.$emit('genre', this.genre)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav a{
  text-decoration: none;
  color: black;
}
</style>
