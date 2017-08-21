<template>
  <div class="details">
    <p>
    <h1 v-if="selectedRegion.hasWon == true">Yes!</h1>
    <h1 v-else>Lol, no.</h1>
    <div>
      <div v-if="selectedRegion.hasWon == true">
        <h2>Winners</h2>
        <span class="sprite" v-for="winners in selectedRegion.winners" v-bind:style="winners.position"></span>
      </div>
      <h2>Participants:</h2>
        <span class="sprite" v-for="participant in selectedRegion.participants" v-bind:id="participant.name" v-bind:style="participant.position"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details',
  data () {
    return {
      allTeams: {
        kr: {
          hasWon: true,
          winners: [{ name: 'skt', position: 'background-position: -360px -625px' }, { name: 'ssw', position: 'background-position: -660px -600px' }],
          participants: [{ name: 'skt', position: 'background-position: -360px -625px' }, { name: 'ssw', position: 'background-position: -660px -600px' }, { name: 'rox', position: 'background-position: -0px -1300px' }, { name: 'koo', position: 'background-position: -300px -1025px' }, { name: 'ktr', position: 'background-position: -120px -400px' }, { name: 'nws', position: 'background-position: -240px -475px' }, { name: 'sgb', position: 'background-position: -660px -600px' }, { name: 'sgw', position: 'background-position: -660px -600px' }, { name: 'nbs', position: 'background-position: -0px -475px' }, { name: 'ssgo', position: 'background-position: -660px -600px' }, { name: 'azf', position: 'background-position: -660px -50px' }, { name: 'njs', position: 'background-position: -180px -475px' }]
        },
        na: {
          hasWon: false,
          winners: [],
          participants: [{ name: 'tsm', position: 'background-position: -60px -750px' }, { name: 'clg', position: 'background-position: -1020px -125px' }, { name: 'epg', position: 'background-position: -420px -200px' }, { name: 'dig', position: 'background-position: -420px -675px' }, { name: 'c9', position: 'background-position: -1080px -100px' }, { name: 'tvc', position: 'background-position: -900px -750px' }]
        },
        eu: {
          hasWon: true,
          winners: [{ name: 'fnc', position: 'background-position: -180px -250px' }],
          participants: [{ name: 'aat', position: 'background-position: -1020px -0px' }, { name: 'fnc', position: 'background-position: -180px -250px' }, { name: 'gdd', position: 'background-position: -60px -700px' }, { name: 'clgeu', position: 'background-position: -1080px -125px' }, { name: 'm5', position: 'background-position: -480px -450px' }, { name: 'sk', position: 'background-position: -300px -625px' }, { name: 'gmb', position: 'background-position: -1020px -250px' }, { name: 'gg', position: 'background-position: -360px -275px' }, { name: 'ld', position: 'background-position: -540px -400px' }, { name: 'all', position: 'background-position: -300px -25px' }, { name: 'h2k', position: 'background-position: -1080px -950px' }, { name: 'og', position: 'background-position: -0px -950px' }, { name: 'g2', position: 'background-position: -240px -275px' }, { name: 'spy', position: 'background-position: -900px -1175px' }]
        },
        cn: {
          hasWon: false,
          winners: [],
          participants: [{ name: 'ig', position: 'background-position: -840px -350px' }, { name: 'we', position: 'background-position: -960px -750px' }, { name: 'omg', position: 'background-position: -60px -525px' }, { name: 'ryc', position: 'background-position: -60px -600px' }, { name: 'edg', position: 'background-position: -840px -950px' }, { name: 'lmq', position: 'background-position: -780px -400px' }, { name: 'shrc', position: 'background-position: -240px -225px' }, { name: 'lgd', position: 'background-position: -600px -400px' }, { name: 'imy', position: 'background-position: -180px -1375px' }, { name: 'rngu', position: 'background-position: -1140px -1000px' }]
        },
        sea: {
          hasWon: true,
          winners: [{ name: 'tpa', position: 'background-position: -540px -650px' }],
          participants: [{ name: 'tp', position: '-480px -725px' }, { name: 'sj', position: 'background-position: -540px -600px' }, { name: 'tpa', position: 'background-position: -540px -650px' }, { name: 'gab', position: 'background-position: -960px -250px' }, { name: 'msk', position: 'background-position: -0px -450px' }, { name: 'ahq', position: 'background-position: -0px -25px' }, { name: 'bgt', position: 'background-position: -960px -50px' }, { name: 'flw', position: 'background-position: -1140px -850px' }]
        },
        iwc: {
          hasWon: false,
          winners: [],
          participants: [{ name: 'abx', position: 'background-position: -0px -1400px' }, { name: 'intz', position: 'background-position: -120px -975px' }, { name: 'png', position: 'background-position: -480px -525px' }, { name: 'dp', position: 'background-position: -360px -150px' }, { name: 'kbm', position: 'background-position: -360px -375px' }]
        }
      },
      selectedRegion: {}
    }
  },

  mounted () {
    this.setRegion()
  },

  watch: {
    '$route': 'setRegion'
  },

  methods: {
    setRegion () {
      if (this.allTeams[this.$route.params.region]) {
        this.selectedRegion = this.allTeams[this.$route.params.region]
      } else {
        this.$router.push('/404')
      }
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

.sprite {
  background-image: url('../assets/TeamSprite.png');
  width: 60px;
  height: 25px;
  display: inline-block;
  vertical-align: middle;
}
</style>
