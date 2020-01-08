<template>
  <div class="w-7/8 sm:w-10/12 md:w-11/12 mx-auto px-4 md:px-12 py-32">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!--  -->

      <!-- Column -->
      <div class="my-1 px-2 py-2 lg:py-0 w-full md:w-1/2 lg:my-4 lg:px-4 xl:px-2 xl:w-1/4">
        <!-- Article -->
        <router-link to="/basics">
          <article
            class="overflow-hidden rounded-lg shadow-lg hover:shadow-xl zoom border-solid border-gray-700 border"
          >
            <div class="relative bg-turquoise-500 pb-2/3">
              <img
                alt=" Placeholder"
                class="absolute h-full w-full object-cover"
                src="../assets/basics-card-topper.png"
              />
            </div>

            <div class="font-normal px-6 py-4 bg-gray-300 border-solid border-gray-700 border-t">
              <div class="w-6/12 mx-auto">
                <div class="flex justify-center">
                  <ul
                    class="ml-2 font-semibold text-gray-700 text-base font-opensans text-l list-disc text-left"
                  >
                    <li>What is JS?</li>
                    <li>Data Types</li>
                    <li>Variables</li>
                    <li>Operators</li>
                    <li>Comments</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </router-link>
        <!-- END Article -->
      </div>
      <!-- END Column -->

      <!-- Column -->
      <div class="my-1 px-2 py-2 lg:py-0 w-full md:w-1/2 lg:my-4 lg:px-4 xl:px-2 xl:w-1/4">
        <!-- Article -->
        <router-link to="/functions">
          <article
            class="overflow-hidden rounded-lg shadow-lg hover:shadow-xl zoom border-solid border-gray-700 border"
          >
            <div class="relative bg-turquoise-500 pb-2/3">
              <img
                alt=" Placeholder"
                class="absolute h-full w-full object-cover"
                src="../assets/functions-card-topper.png"
              />
            </div>

            <div class="font-normal px-6 py-4 bg-gray-300 border-solid border-gray-700 border-t">
              <div class="w-6/12 mx-auto">
                <div class="flex justify-center">
                  <ul
                    class="ml-2 font-semibold text-gray-700 text-base font-opensans text-l list-disc text-left"
                  >
                    <li>What is JS?</li>
                    <li>Data Types</li>
                    <li>Variables</li>
                    <li>Operators</li>
                    <li>Comments</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </router-link>
        <!-- END Article -->
      </div>
      <!-- END Column -->
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.zoom {
  transition: transform 0.4s;
}

.zoom:hover {
  transform: scale(1.03);
}
</style>
