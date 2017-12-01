<template>
  <div class="selected">
    <ul>
      <li v-for="(movie, index) in selectedMovies" :key="index" @click="removeFromSelected(index)">
        {{movie.title}}
      </li>
    </ul>
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
</template>

<script>
export default {
  name: 'selected',
  props: ['selectedMovies'],
  methods: {
    removeFromSelected: function (index) {
      this.$emit('removeMovie', index);
    },
  },
}
</script>

<style lang="scss">

</style>
