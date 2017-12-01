<template>
  <main id="link">
    <!-- Search Component -->
    <search @selectMovie="addToSelected($event)" :get-poster="getPoster" :parse-date="parseDate"></search>

    <div class="divider"></div>

    <!-- Display Selected Movies -->
    <selected @removeMovie="removeFromSelected($event)" :selected-movies="selectedMovies" :get-poster="getPoster" :parse-date="parseDate"></selected>

    <!-- Home Page Animation -->
    <div id="neural-animation"></div>

  </main>
</template>

<script>
import search from './search';
import selected from './selected';

import { TMDB } from '@/router/http';
import path from 'path';

export default {
  name: 'link',
  components: {
    search,
    selected
  },
  data() {
    return {
      selectedMovies: [],

      config: [],
    };
  },
  created() {
    TMDB.config()
      .then(res => {
        this.config = res.data;
      })
      .catch(e => {
        this.errors.push(e);
        console.log(e);
      });
  },

  methods: {
    addToSelected: function (movie) {
      this.selectedMovies.push(movie);
    },
    removeFromSelected: function (index) {
      this.selectedMovies.splice(index, 1);
    },
    parseDate: function (dateString) {
      return new Date(Date.parse(dateString)).getFullYear();
    },
    getPoster: function (imgPath) {
      if (imgPath) {
        return path.join(this.config.images.secure_base_url, this.config.images.poster_sizes[3], imgPath);
      }
      return '';
    },
  },
};
</script>


<style lang="scss">
  @import "~styles/components/link";
</style>

