<template>
  <main id="recommend">
    <div class="container">
      <div id="search">
        <input type="text" name="search" id="search-box" autocomplete="off" placeholder="Search a movie...">
      </div>

    </div>
  </main>
</template>

<script>
export default {
  name: 'recommend',
  data() {
    return {
      temp: 'Recommend'
    };
  }
};
</script>


<style lang="scss" scoped>
  @import "~styles/components/recommend";
</style>
