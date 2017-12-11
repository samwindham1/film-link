<template>
  <div id="search">
    <div class="container">
      <!-- Search Box -->
      <input id="search-box" type="text" v-model="query" placeholder="Search a movie">
      <!-- Search Results -->
      <transition name="open-results">
        <div id="results" v-show="results.length > 0">
          <ul id="scroll" ref="scroll" @scroll="scroll">
            <li class="result" v-for="(movie, index) in results" :key="index" @click="select(movie)">
              <movie :details="movie" :poster="getPoster(movie.poster_path)" :search="true"></movie>
            </li>
          </ul>
          <!-- Scroll icons -->
          <i v-show="scrollLeft" id="scroll-left" class="scroll-indicator fa fa-angle-left"></i>
          <i v-show="scrollRight" id="scroll-right" class="scroll-indicator fa fa-angle-right"></i>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { TMDB } from '@/router/http';
import _, { debounce } from 'lodash';
import movie from './movie';

export default {
  name: 'search',
  components: {
    movie
  },
  data() {
    return {
      // search
      query: '',

      // scroll
      scrollLeft: false,
      scrollRight: true,

      // api results
      results: [],
      errors: []
    };
  },
  props: [
    'getPoster',
  ],

  methods: {
    search: debounce(function () {
      if (!this.query) return;

      TMDB.search(this.query)
        .then(res => {
          this.results = res.data.results.map((movie) => {
            movie.date = this.parseDate(movie.release_date);
            return movie;
          });

          if (this.results.length > 10) {
            this.scrollLeft = false;
            this.scrollRight = true;
          }
          else {
            this.scroll();
          }
        })
        .catch(e => {
          this.errors.push(e);
          console.log(e);
        });
    }, 300),

    parseDate: function (dateString) {
      return new Date(Date.parse(dateString)).getFullYear();
    },

    clearResults: function () {
      this.results = [];
    },

    scroll: debounce(function () {
      var width = this.$refs.scroll.offsetWidth;
      var scrollWidth = this.$refs.scroll.scrollWidth;
      var scrollLeft = this.$refs.scroll.scrollLeft;

      if (scrollLeft < scrollWidth - width) {
        this.scrollRight = true;
      }
      else {
        this.scrollRight = false;
      }

      if (scrollLeft > 0) {
        this.scrollLeft = true;
      }
      else {
        this.scrollLeft = false;
      }
    }, 15),

    select: function (movie) {
      this.clearResults();
      this.query = '';
      this.$emit('selectMovie', movie);
    },
  },
  watch: {
    query: function () {
      if (!this.query)
        this.clearResults();
      else
        this.search();
    },
  },
}
</script>

<style lang="scss">
  @import "~styles/components/search";
</style>

