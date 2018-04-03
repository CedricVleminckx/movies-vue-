<template>
    <nav class="nav">
      <md-app>
      <md-app-toolbar class="md-default">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title" v-if="$route.path === '/Home'">Home page</span>
          <span class="md-title" v-else-if="$route.path === '/Series'">Series</span>
          <span class="md-title" v-else-if="$route.path === '/Movies'">Movies</span>
          <span class="md-title" v-else-if="$route.path === '/Favorites'">Favorites</span>
          <span class="md-title" v-else v-on="getRoute">{{ title }}</span>
        </div>

        <md-field class="search"  md-clearable>
          <label>Search for movies/series</label>
          <md-input v-model="search"></md-input>
        </md-field>

        <div class="md-toolbar-section-end">
          <md-button v-on:click="refresh" class="md-icon-button">
            <md-icon>refresh</md-icon>
          </md-button>

          <md-button class="md-icon-button">
              <md-icon>view_module</md-icon>
          </md-button>
        </div>
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
        <router-view :search="search"/>
      </md-app-content>
    </md-app>
      <!--<ul>
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
import axios from 'axios'
export default {
  data () {
    return {
      search: '',
      title: '',
      filter: '',
      genre: '',
      test:[],
      menuVisible: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    },
    refresh () {
      location.reload();
    }
  },
  computed: {
    listen () {
      this.$emit('search', this.search)
    },
    listenFilter () {
      this.$emit('filter', this.filter)
    },
    listenGenre () {
      this.$emit('genre', this.genre)
    },
    getRoute () {
      let id = this.$route.params.id;
      axios.get('http://cedricvleminckx.ikdoeict.be/media/' + id)
        .then(response => {
          this.title = response.data.name
        })
        .catch(error => { console.log(error) })
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
.search{
  width: 450px;
}
</style>
