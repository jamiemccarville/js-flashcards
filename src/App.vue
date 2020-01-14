<template>
  <div id="app">
    <div
      class="flex items-baseline justify-end py-6 pr-4 font-sans text-xl bg-gray-100 text-darkcharcoal font-opensans nav"
    >
      <router-link class="px-4 mr-auto text-4xl font-raleway landing" to="/">JS Flashcards</router-link>
      <router-link
        class="px-4 border-r border-solid border-darkcharcoal basics hover:text-basicred font-opensans"
        to="/basics"
      >Basics</router-link>
      <router-link class="px-4 hover:text-fnorange functions" to="/functions">Functions</router-link>
    </div>
    <router-view id="router-view" />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from "../src/components/AppFooter";

export default {
  components: {
    AppFooter
  }
};
</script>

<style >
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}

.nav a.basics.router-link-active {
  color: hsl(355.2, 84.3%, 62.5%);
}
.nav a.functions.router-link-active {
  color: hsl(22.2, 84.3%, 62.5%);
}

.nav a.landing.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: #f0db4f;
}

.landing:hover {
  text-decoration: underline;
  text-decoration-color: #f0db4f;
}
</style>
