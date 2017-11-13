<template>
  <main id="link">
    <div class="container">
      <div id="search">
        <!-- Search Box -->
        <input type="text" name="search" id="search-box" autocomplete="off" placeholder="Search a movie...">
        <!-- Results -->
        <ul id="results">
          <li v-for="(movie, index) in results" :key="index">
            {{ movie.title }} - {{ movie.release_date }}
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import { TMDB } from '@/router/http';

export default {
  name: 'link',
  data() {
    return {
      results: [],
      errors: []
    };
  },

  created() {
    TMDB.search('Mad Max')
      .then(res => {
        this.results = res.data.results;
        console.log(res.data.results);
      })
      .catch(e => {
        this.errors.push(e);
        console.log(e);
      })
  }

};

</script>


<style lang="scss" scoped>
  @import "~styles/components/link";
</style>
