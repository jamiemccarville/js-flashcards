<template>
  <!-- Column -->
  <div
    class="my-1 px-2 py-2 lg:py-0 w-full md:w-1/2 lg:my-4 lg:px-4 xl:px-2 xl:w-1/4"
  >
    <!-- Article -->
    <article class="overflow-hidden rounded-lg shadow-lg hover:shadow-xl zoom">
      <div class="relative bg-turquoise-500 pb-2/3">
        <a
          href="https://codesandbox.io/s/github/jamiemccarville/udemy-vue2-final-project"
          target="blank"
        >
          <img
            alt=" Placeholder"
            class="absolute h-full w-full object-cover object-left"
            src="@/assets/logo.png"
          />
        </a>
      </div>

      <div class="px-6 py-4">
        <div class="font-sans font-bold text-xl mb-2">
          <a
            class="no-underline hover:underline"
            href="https://codesandbox.io/s/github/jamiemccarville/udemy-vue2-final-project"
            target="blank"
            >Stock Trader</a
          >
        </div>

        <p class="text-gray-700 text-base font-opensans">
          Final project for Vue course building an app using Vue, vue-router,
          vuex and Firebase
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#Vue</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#vuex</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
          >#vue-router</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
          >#Firebase</span
        >
      </div>
    </article>
    <!-- END Article -->
  </div>
  <!-- END Column -->
</template>

<script>
export default {};
</script>

<style></style>
