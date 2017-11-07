<template>
  <footer id="footer">
    <div class="container">
      <div class="row clear">
        <div class="col-6 col-5-m col-4-l">
          <ul>
            <li>
              <a href="#">Train our model</a>
            </li>
            <li>
              <a href="https://vuejs.org/">Powered by Vue.js</a>
            </li>
            <li>
              <a href="https://github.com/samwindham1/film-link">Github</a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-5-m col-4-l right">
          <ul>
            <li>
              Developed by
              <a href="https://github.com/samwindham1">Sam Windham</a>
              &copy 2017
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {};
  }
};
</script>


<style lang="scss" scoped>
  @import "~styles/components/footer";
</style>
