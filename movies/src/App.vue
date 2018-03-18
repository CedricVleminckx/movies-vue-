<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: #eeeeee;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    position: fixed;
    top: 0;
    width: 100%;
}

.nav li {
    float: left;
}

.nav li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.nav li a:hover {
    background-color: #111;
}
.movie{
  border-bottom: solid #31d51d;
}
.serie{
  border-bottom: solid #ed2525;
}
.contentAll{
  width: 70%;
  margin: auto;
  margin-top: 40px;
}
.contentAll a{
  text-decoration: none;
  color: #333;
}
.content{
 width: 33%;
 float: left;
 margin-top: 30px;
}
.content h2{
  text-align: center;
}
.content img{
  width: 70%;
  height: 280px;
  margin-left: 15%;
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
