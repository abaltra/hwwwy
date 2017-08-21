<template>
  <div class="hello">
    <h1>Have we won worlds yet?</h1>
    <select v-on:change="go">
      <option value="">Choose a Tournament</option>
      <option v-for="region in regions" v-bind:value="region.id">{{ region.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      regions: [{ name: 'NA LCS', id: 'na' },
      { name: 'OGN', id: 'kr' },
      { name: 'EU LCS', id: 'eu' },
      { name: 'LPL', id: 'cn' },
      { name: 'GPL', id: 'sea' },
      { name: 'IWC', id: 'iwc' }
      ]
    }
  },
  methods: {
    go: function (e) {
      if (e.target.value === '') return
      console.log(`Should go to /${e.target.value}`)
      this.$router.push(`/${e.target.value}`)
    }
  }
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
