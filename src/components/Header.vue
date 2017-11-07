<template>
  <header id="header">
    <div class="container">
      <div class="row clear">
        <div class="col-6 col-4-m" id="logo">
          <a href="#">
            <i class="fa fa-link" />
            <span>{{ title }}</span>
          </a>
        </div>
        <div class="col-6 right" id="menu">
          <a href="#">ABOUT</a>
          <a href="#">SUPPORT</a>
          <a href="#" class="sign-in">LOGIN</a>
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
      title: 'FILMLINK'
    };
  }
};
</script>

<style lang="scss" scoped>
  @import "~styles/components/header";
</style>
