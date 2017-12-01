<template>
  <div class="selected container">
    <ul>
      <li class="selected-movie" v-for="(movie, index) in selectedMovies" :key="index" @mouseup="removeFromSelected(index)">
        <img class="poster" :src="getPoster(movie.poster_path)">
        <i class="fa fa-times-thin close-icon" aria-hidden="true"></i>
        <div class="details">
          <div class="title">
            {{movie.title}}
          </div>
          <div class="date" v-if="parseDate(movie.release_date)">
            ({{parseDate(movie.release_date)}})
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'selected',
  props: [
    'selectedMovies',
    'getPoster',
    'parseDate',
  ],
  methods: {
    removeFromSelected: function (index) {
      this.$emit('removeMovie', index);
    },
  },
}
</script>

<style lang="scss">
  @import "~styles/components/selected";
</style>
