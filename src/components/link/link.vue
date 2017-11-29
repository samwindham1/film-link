<template>
  <main id="link">

    <div id="search">
      <div class="container">
        <!-- Search Box -->
        <multiselect v-model="selected_movie" id="search-box" placeholder="Search a movie" open-direction="down" label="title" :options="results" :multiple="false" :loading="isLoading" :internal-search="false" :options-limit="50" :max-height="150" @search-change="search" @close="clearResults"></multiselect>
      </div>
    </div>

    <!-- Selected -->
    <div class="selected" v-if="selected_movie">
      <div class="container">
        <h3>{{selected_movie.title}}</h3>
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
      selected_movie: null,
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
      console.log('debounce search');
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
        return path.join(this.config.images.secure_base_url, this.config.images.poster_sizes[0], imgPath);
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

