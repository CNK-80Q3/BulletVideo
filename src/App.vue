<template>
  <div id="app">
    <MainNavbar />
    <router-view />
  </div>
</template>

<script>
import MainNavbar from "components/content/main-navbar/MainNavbar";

export default {
  name: "app",
  components: {
    MainNavbar
  }
};
</script>

<style>
@import "~assets/css/base.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app a {
  color: #409eff;
}

#app a.router-link-exact-active {
  color: #42b983;
}
</style>
