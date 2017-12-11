<template>
  <div class="movie">
    <img class="poster" :src="poster">
    <div class="details">
      <div class="title">
        {{details.title}}
      </div>
      <div class="date" v-if="details.date">
        ({{details.date}})
      </div>
      <div class="icon">
        <span class="fa fa-plus" aria-hidden="true" v-if="search"></span>
        <i class="fa fa-info-circle" aria-hidden="true" v-if="!search"></i>
      </div>
    </div>
    <div class="info" v-if="displayInfo">
      Displayed
    </div>
  </div>
</template>

<script>
export default {
  name: 'movie',
  props: [
    'details',
    'poster',
    'displayInfo',
    'search',
  ],
}
</script>

<style lang="scss">
  @import "~styles/components/movie";
</style>
