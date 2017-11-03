<template>
  <header id="header">
    <div id="float-left"></div>
    <h1>{{ message }}</h1>
  </header>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      message: 'Film Link'
    };
  }
};
</script>

<style lang="scss" scoped>
  @import "~styles/components/header";
</style>
