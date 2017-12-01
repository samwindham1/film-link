<template>
  <main id="link">
    <!-- Search Component -->
    <search @selectMovie="addToSelected($event)"></search>

    <div class="divider"></div>

    <!-- Display Selected Movies -->
    <selected :selected-movies="selectedMovies" @removeMovie="removeFromSelected($event)"></selected>

    <!-- Home Page Animation -->
    <div id="neural-animation"></div>

  </main>
</template>

<script>
import search from './search';
import selected from './selected';

export default {
  name: 'link',
  components: {
    search,
    selected
  },
  data() {
    return {
      selectedMovies: [],
    };
  },
  methods: {
    addToSelected: function (movie) {
      this.selectedMovies.push(movie);
    },
    removeFromSelected: function (index) {
      this.selectedMovies.splice(index, 1);
    },
  },
  watch: {
    selectedMovies: function () {
      // console.log(this.selectedMovies.map(m => m.title));
    }
  }
};
</script>


<style lang="scss">
  @import "~styles/components/link";
</style>

