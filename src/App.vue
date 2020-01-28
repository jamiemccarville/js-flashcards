<template>
  <div id="app">
    <div
      class="z-50 flex items-baseline justify-end py-6 pr-4 font-sans text-xl bg-gray-100 text-darkcharcoal font-opensans nav"
    >
      <router-link class="px-4 mr-auto text-4xl font-raleway landing" to="/">JS Flashcards</router-link>
      <router-link
        class="hidden px-4 border-r border-solid lg:block border-darkcharcoal basics hover:text-basicred font-opensans"
        to="/basics"
      >Basics</router-link>
      <router-link
        class="hidden px-4 border-r border-solid border-darkcharcoal lg:block hover:text-fnorange"
        to="/functions"
      >Functions</router-link>
      <router-link class="hidden px-4 lg:block hover:text-minion" to="/control-flow">Control Flow</router-link>
      <div class="lg:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-darkcyan-500 hover:text-moonstone-500 focus:text-moonstone-500 focus:outline-none"
        >
          <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path v-if="!isOpen" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            <path
              v-if="isOpen"
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Dropdown Starts  -->

    <div id="dropdown" class="w-full bg-gray-100 lg:hidden font-opensans drop">
      <ul
        class="flex flex-col items-center justify-center flex-grow w-full tracking-wide uppercase"
        :class="isOpen ? 'block': 'hidden'"
      >
        <li class="w-full pt-5 pb-5 mb-6 text-center border-t-2 border-b-2 border-gray-400">
          <router-link
            class="text-lg hover:text-basicred basics"
            to="/basics"
            @click.native="isOpen = !isOpen"
          >Basics</router-link>
        </li>
        <li class="w-full pb-5 text-center border-b-2 border-gray-400">
          <router-link
            to="/functions"
            class="text-lg about hover:text-fnorange"
            @click.native="isOpen = !isOpen"
          >Functions</router-link>
        </li>
        <li class="w-full pt-5 pb-5 text-center border-b-2 border-gray-400">
          <router-link
            to="/control-flow"
            class="text-lg about hover:text-minion"
            @click.native="isOpen = !isOpen"
          >Control Flow</router-link>
        </li>
      </ul>
    </div>

    <!-- Dropdown ENDS  -->

    <router-view id="router-view" />
    <app-footer></app-footer>
  </div>
</template> 

<script>
import AppFooter from "../src/components/AppFooter";

export default {
  components: {
    AppFooter
  },
  data() {
    return {
      isOpen: false,
      theme: ""
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style >
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}

.nav a.basics.router-link-active,
.drop a.basics.router-link-active {
  color: hsl(355.2, 84.3%, 62.5%);
}
.nav a.functions.router-link-active,
.drop a.functions.router-link-active {
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
