<template>
  <div class="px-4 py-12 mx-auto w-7/8 sm:w-10/12 md:w-11/12 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!--  -->

      <!-- Column -->
      <div class="w-full px-2 py-2 my-1 sm:w-1/2 lg:py-0 lg:my-4 lg:px-4 xl:px-2 xl:w-1/4 lg:w-1/3">
        <!-- Basics  -->
        <router-link to="/basics">
          <article
            class="overflow-hidden border border-gray-700 border-solid rounded-lg shadow-lg hover:shadow-xl zoom"
          >
            <div class="relative bg-turquoise-500 pb-7/12">
              <img
                alt="basics card top"
                class="absolute object-cover w-full h-full"
                src="../assets/basics-card-topper.png"
              />
            </div>

            <div class="px-6 py-4 font-normal bg-gray-200 border-t border-gray-700 border-solid">
              <div class="w-6/12 mx-auto">
                <div class="flex justify-center">
                  <ul
                    class="ml-2 text-base font-semibold text-left text-gray-700 list-disc font-opensans text-l"
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
        <!-- END Basics -->
      </div>
      <!-- END Column -->

      <!-- Column -->
      <div class="w-full px-2 py-2 my-1 sm:w-1/2 lg:py-0 lg:my-4 lg:px-4 xl:px-2 xl:w-1/4 lg:w-1/3">
        <!-- Functions -->
        <router-link to="/functions">
          <article
            class="overflow-hidden border border-gray-700 border-solid rounded-lg shadow-lg hover:shadow-xl zoom"
          >
            <div class="relative bg-turquoise-500 pb-7/12">
              <img
                alt=" Placeholder"
                class="absolute object-cover w-full h-full"
                src="../assets/functions-card-topper.png"
              />
            </div>

            <div class="px-6 py-4 font-normal bg-gray-200 border-t border-gray-700 border-solid">
              <div class="w-11/12 mx-auto">
                <div class="flex justify-center">
                  <ul
                    class="ml-2 text-base font-semibold text-left text-gray-700 list-disc font-opensans text-l"
                  >
                    <li>What are functions?</li>
                    <li>Quick Overview</li>
                    <li>Defining a function</li>
                    <li>Calling a function</li>
                    <li>Parameters</li>
                    <li>Arguments</li>
                    <li>Return Statement</li>
                    <li>IIFE</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </router-link>
        <!-- END Functions -->
      </div>
      <!-- END Column -->

      <!-- Column -->
      <div class="w-full px-2 py-2 my-1 sm:w-1/2 lg:py-0 lg:my-4 lg:px-4 xl:px-2 xl:w-1/4 lg:w-1/3">
        <!-- Control Flow -->
        <router-link to="/control-flow">
          <article
            class="overflow-hidden border border-gray-700 border-solid rounded-lg shadow-lg hover:shadow-xl zoom"
          >
            <div class="relative bg-turquoise-500 pb-7/12">
              <img
                alt=" Placeholder"
                class="absolute object-cover w-full h-full"
                src="../assets/control-flow-topper.png"
              />
            </div>

            <div class="px-6 py-4 font-normal bg-gray-200 border-t border-gray-700 border-solid">
              <div class="w-11/12 mx-auto">
                <div class="flex justify-center">
                  <ul
                    class="ml-2 text-base font-semibold text-left text-gray-700 list-disc font-opensans text-l"
                  >
                    <li>Block Statement</li>
                    <li>"if" Statement</li>
                    <li>Truthy and Falsey</li>
                    <li>"if"..."else"</li>
                    <li>"if"..."else if"..."else"</li>
                    <li>Ternary Operator</li>
                    <li>Switch Statement</li>
                    <li>Break Statement</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </router-link>
        <!-- END Control Flow -->
      </div>
      <!-- END Column -->
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
</style>
