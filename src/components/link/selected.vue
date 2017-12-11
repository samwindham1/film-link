<template>
  <div class="selected">
    <div class="container">
      <ul>
        <li class="selected-movie" v-for="(movie, index) in selectedMovies" :key="index" @mouseup="displayInfo(index)">
          <movie :details="movie" :poster="getPoster(movie.poster_path)" :display-info="(index == displayedIndex)"></movie>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import movie from './movie';

export default {
  name: 'selected',
  data() {
    return {
      displayedIndex: -1,
    };
  },
  components: {
    movie,
  },
  props: [
    'selectedMovies',
    'getPoster',
  ],
  methods: {
    removeFromSelected: function (index) {
      this.$emit('removeMovie', index);
    },
    displayInfo: function (index) {
      this.displayedIndex = index;
    }
  },
}
</script>

<style lang="scss">
  @import "~styles/components/selected";
</style>
