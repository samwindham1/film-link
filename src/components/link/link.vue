<template>
  <main id="link">
    <div class="container">
      <div id="search">
        <!-- Search Box -->
        <input type="text" name="search" id="search-box" autocomplete="off" placeholder="Search a movie..." v-model="userInput" debounce="3000">
        <!-- Results -->
        <ul id="results-dropdown" v-if="searching">
          <li v-for="(movie, index) in results" :key="index" class="dropdown-item">
            <img :src="getPoster(movie.poster_path)" class="search-image">
            <div class="movie-info">
              {{ movie.title }}
              <span class="date">({{ parseDate(movie.release_date) }})</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import { TMDB } from '@/router/http';
import path from 'path';
import _ from 'lodash';

export default {
  name: 'link',
  data() {
    return {
      userInput: '',

      // constants
      searching: false,
      search_limit: 4,
      max_title_length: 50,

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
    search: function (query) {
      this.searching = true;
      TMDB.search(query)
        .then(res => {
          this.results = res.data.results.map((movie) => {
            if (movie.title.length > this.max_title_length) {
              movie.title = movie.title.slice(0, this.max_title_length).trim() + '...';
            }
            return movie;
          });
          // limit results to 4
          this.results = this.results.slice(0, this.search_limit);
        })
        .catch(e => {
          this.errors.push(e);
          console.log(e);
        });
    },
    getPoster: function (imgPath) {
      if (imgPath) {
        return path.join(this.config.images.secure_base_url, this.config.images.poster_sizes[0], imgPath);
      }
      return '';
    }
  },

  watch: {
    userInput: _.debounce(function (val) {
      if (val) {
        this.search(val);
      }
      else {
        this.searching = false;
      }
    }, 300),
    searching: function () {
      if (!this.searching) {
        this.results = [];
      }
    }
  }

};

</script>


<style lang="scss" scoped>
  @import "~styles/components/link";
</style>
