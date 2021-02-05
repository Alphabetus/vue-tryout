<template>
  <h1>Vue 3 and Fetch Example</h1>
  <small>The spaghetti is uncanny but it works</small><br>
  <b><small>Added a timer on API response to increase drama</small></b>

  <div id="testing-stuff" style="padding-top: 2em; min-height: 333px" >
    <div v-if="!loading && posts && posts.length">
      <div v-for="post of posts" v-bind:key="post.id" transition="slide-fade">
          {{post.title}}
      </div>
    </div>

    <p v-if="loading">
      loading a really slow API call
    </p>
  </div>

  <div style="margin-top: 25px">
    <div style="text-align: center">
      <div v-if="!loading">page {{ page }} of {{ total_pages }}</div>
      <div v-else><small>...counting pages...</small></div>
    </div>
    <button v-if="!loading" v-on:click="incPage" style="margin-top: 1em;">Read next</button><br>
<!--    <button v-on:click="test">asd</button>-->
  </div>
</template>
<script>

//import axios from "axios";

export default {
  el: '#testing-stuff',
  name: 'Posts',
  props: {
  },

  data: () => {
    return {
      page: 1,
      total_pages: null,
      loading: true,
      posts: [],
      url: "//memes-api.zionminecraft.com/get_posts_directly_alphabetus?page="
    }
  },

  /**
   * Note:
   * API Output response is ugly to read (arrays & stuff)
   * because the api was adapted to this. spaghetti à la bolognese
   */
  methods: {
    incPage: function() {
      this.fetchData();
      this.loading = true;
    },
    fetchData() {
      fetch(this.url + this.page, {method: "POST"})
      .then(res => res.json())
      .then(a => {
        this.posts = a[0];
        this.loading = false;
        this.page = this.page + 1;
      })
    },
    test() {
      var array = this.posts;
        const random = Math.floor(Math.random() * array.length);
        array.splice(random, 1)[0];
    }
  },

  created() {
    fetch(this.url + this.page, {method: "POST"})
    .then(res => res.json())
    .then(a => {
      this.loading = false;
      this.total_pages = a[1];
      this.posts = a[0];
    })
  }


}
</script>

<style lang="scss">

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>