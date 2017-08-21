<template>
  <div class="notfound">
    <h1>That doesn't seem to be a real region, chap.</h1>
    <p> Maybe you want to go back <a href="/">home</a> and try again </p>
  </div>
</template>

<script>
export default {
  name: 'notfound'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
