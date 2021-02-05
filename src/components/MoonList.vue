
<template>
  <div v-for="moon in moons" v-bind:key="moon.t">
    <div v-bind:class="{ yoloactive: moon.active, yolonotactive: !moon.active }">
      {{moon.t}}
      <small v-if="moon.active">is active</small>
      <small v-else>is <strong>not</strong> active</small>
    </div>
  </div>
  <button v-on:click="test">yo</button>
  <button v-on:click="shuffleArray">shuffle</button>
</template>

<script>
  export default {
    name: "MoonList",
    data: function () {
      return {
        moons: [
          {t: "123", active: false},
          {t: "321", active: true}
        ]
      }
    },
    methods: {
      test: function () {
        this.moons.push({t: Math.floor(Math.random() * Math.floor(999)), active: Math.random() < 0.5})
      },
      shuffleArray: function () {
        this.moons = shuffle(this.moons)
      }
    }
  }


  function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
</script>

<style lang="scss">
  .yoloactive { background: lightgreen; }
  .yolonotactive { background: lightpink; }
</style>