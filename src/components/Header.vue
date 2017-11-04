<template>
  <header id="header">
    <div class="container">
      <div class="row clear">
        <div class="col-4" id="logo">
          <a href="#">
            <i class="fa fa-link" />
            <span>{{ title }}</span>
          </a>
        </div>
        <div class="col-6 push-2" id="menu">
          <a href="#" class="btn">Sign-in</a>
          <a href="#" class="btn">About</a>
          <a href="#" class="btn">Support</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      title: 'Film Link'
    };
  }
};
</script>

<style lang="scss" scoped>
  @import "~styles/components/header";
</style>
