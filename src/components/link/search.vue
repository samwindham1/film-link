<template>
  <div class="">
    <div id="search">
      <div class="container">
        <!-- Search Box -->
        <input id="search-box" type="text" v-model="query" placeholder="Search a movie">
        <transition name="open-results">
          <div id="results" v-if="results.length > 0">
            <ul id="scroll" ref="scroll" v-on:scroll="scroll">
              <li class="result" v-for="movie in results" :key="movie.id">
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
            <i v-if="scrollLeft" id="scroll-left" class="scroll-indicator fa fa-angle-left"></i>
            <i v-if="scrollRight" id="scroll-right" class="scroll-indicator fa fa-angle-right"></i>
          </div>
        </transition>
      </div>
    </div>

    <!-- Selected -->
    <!-- <div class="selected" v-if="selected && selected.length > 0">
        <div class="container">
          <ul>
            <li class="selected-movie" v-for="movie in selected" :key="movie.id" :title="movie.title">
              <img class="poster" :src="getPoster(movie.poster_path)">
              <div class="dim-overlay"></div>
              <i class="fa fa-times-thin close-icon" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </div> -->
  </div>
</template>

<script>
import { TMDB } from '@/router/http';
import path from 'path';
import _, { debounce } from 'lodash';

export default {
  name: 'search',
  data() {
    return {
      // multi-select
      selected: null,
      isLoading: false,
      query: '',

      // scroll
      scrollLeft: false,
      scrollRight: true,

      // api results
      results: [],
      config: [],
      errors: []
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
    parseDate: function (dateString) {
      return new Date(Date.parse(dateString)).getFullYear();
    },

    search: debounce(function () {
      if (!this.query) return;

      this.isLoading = true;
      TMDB.search(this.query)
        .then(res => {
          this.results = res.data.results;
          this.isLoading = false;
          // console.log(this.results.map(movie => movie.title));
        })
        .catch(e => {
          this.errors.push(e);
          console.log(e);
          this.isLoading = false;
        });
    }, 300),

    getPoster: function (imgPath) {
      if (imgPath) {
        return path.join(this.config.images.secure_base_url, this.config.images.poster_sizes[3], imgPath);
      }
      return '';
    },

    clearResults: function () {
      // console.log("Results Cleared.");
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
  @import "~styles/components/search";
</style>

