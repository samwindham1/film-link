<template>
  <div class="">
    <div id="search">
      <div class="container">
        <!-- Search Box -->
        <input id="search-box" type="text" v-model="query" placeholder="Search a movie">
        <!-- Search Results -->
        <transition name="open-results">
          <div id="results" v-show="results.length > 0">
            <ul id="scroll" ref="scroll" @scroll="scroll">
              <li class="result" v-for="(movie, index) in results" :key="index" @click="select(movie)">
                <!-- Poster -->
                <img class="poster" :src="getPoster(movie.poster_path)">
                <!-- Details -->
                <div class="details">
                  <div class="title">
                    {{movie.title}}
                  </div>
                  <div class="date" v-if="parseDate(movie.release_date)">
                    ({{parseDate(movie.release_date)}})
                  </div>
                  <div class="add-icon">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </div>
                </div>
              </li>
            </ul>
            <!-- Scroll icons -->
            <i v-show="scrollLeft" id="scroll-left" class="scroll-indicator fa fa-angle-left"></i>
            <i v-show="scrollRight" id="scroll-right" class="scroll-indicator fa fa-angle-right"></i>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { TMDB } from '@/router/http';
import _, { debounce } from 'lodash';

export default {
  name: 'search',
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
    'parseDate',
  ],

  methods: {
    search: debounce(function () {
      if (!this.query) return;

      this.isLoading = true;
      TMDB.search(this.query)
        .then(res => {
          this.results = res.data.results;
          this.isLoading = false;

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
          this.isLoading = false;
        });
    }, 300),

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

