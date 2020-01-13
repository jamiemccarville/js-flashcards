<template>
  <div id="app">
    <div class="flex items-center justify-end py-6 pr-4 font-sans text-xl nav">
      <router-link class="px-4 mr-auto text-4xl font-raleway home" to="/">JS Flashcards</router-link>
      <router-link
        class="px-4 border-r border-gray-900 border-solid basics hover:text-basicred"
        to="/basics"
      >Basics</router-link>
      <router-link class="px-4 hover:text-fnorange functions" to="/functions">Functions</router-link>
    </div>
    <router-view id="router-view" />
  </div>
</template>

<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.nav a.basics.router-link-active {
  color: hsl(355.2, 84.3%, 62.5%);
}
.nav a.functions.router-link-active {
  color: hsl(22.2, 84.3%, 62.5%);
}

.nav a.home.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: #f0db4f;
}

.home:hover {
  text-decoration: underline;
  text-decoration-color: #f0db4f;
}
/* #nav {
  padding: 30px;
  background-color: #f5f5f5;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
