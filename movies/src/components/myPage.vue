<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'myPage',
  data() {
    return {
      title: 'Welcome to my new page',
    };
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
  color: #c72828;
}
</style>
