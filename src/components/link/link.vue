<template>
  <main id="link">

    <div id="search">
      <div class="container">
        <!-- Search Box -->
        <multiselect v-model="selected" id="search-box" placeholder="Search a movie" open-direction="down" label="title" :options="results" :multiple="true" :loading="isLoading" :internal-search="false" :options-limit="50" :max-height="150" @search-change="search" @close="clearResults"></multiselect>
      </div>
    </div>

    <!-- Selected -->
    <div class="selected" v-if="selected && selected.length > 0">
      <div class="container">
        <ul>
          <li class="selected-movie" v-for="movie in selected" :key="movie.id" :title="movie.title">
            <img class="poster" :src="getPoster(movie.poster_path)">
            <div class="dim-overlay"></div>
            <i class="fa fa-times-thin close-icon"></i>
          </li>
        </ul>
      </div>
    </div>

    <div class="divider"></div>

    <div id="neural-animation"></div>
  </main>
</template>

<script>
import { TMDB } from '@/router/http';
import path from 'path';
import _, { debounce } from 'lodash';
import multiselect from 'vue-multiselect';

export default {
  name: 'link',
  components: {
    multiselect,
  },
  data() {
    return {
      // multi-select
      selected: null,
      isLoading: false,

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

    search: debounce(function (query) {
      if (!query) return;

      this.isLoading = true;
      TMDB.search(query)
        .then(res => {
          this.results = res.data.results;
          this.isLoading = false;
        })
        .catch(e => {
          this.errors.push(e);
          console.log(e);
          this.isLoading = false;
        });
    }, 300),

    getPoster: function (imgPath) {
      if (imgPath) {
        return path.join(this.config.images.secure_base_url, this.config.images.poster_sizes[2], imgPath);
      }
      return '';
    },

    clearResults: function () {
      this.results = [];
    }
  },

};

</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
  @import "~styles/components/link";
</style>

