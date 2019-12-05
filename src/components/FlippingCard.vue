<template>
  <div class="w-7/8 sm:w-10/12 md:w-11/12 my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!--  -->

      <!-- Column -->
      <div
        class="my-1 px-2 py-2 lg:py-0 w-full md:w-1/2 lg:my-4 lg:px-4 xl:px-2 xl:w-1/4"
      >
        <div class="flip-card" @click="flipMe = !flipMe">
          <div class="flip-card-inner h-full w-full relative">
            <!-- FRONT side  -->
            <article
              class="flip-card-front overflow-hidden rounded-lg shadow-lg hover:shadow-xl zoom"
              :class="{ flipped: flipMe }"
            >
              <div class="relative bg-turquoise-500 pb-2/3">
                <img
                  alt=" Placeholder"
                  class="absolute h-full w-full object-cover"
                  src="../assets/hacktoberfest2.png"
                />
              </div>

              <div class="px-6 py-4">
                <div class="font-sans font-bold text-xl mb-2">Stock Trader</div>

                <p class="text-gray-700 text-base font-opensans">
                  Final project for Vue course building an app using Vue,
                  vue-router, vuex and Firebase
                </p>
              </div>
            </article>
            <!-- END FRONT side -->

            <!--  BACK side  -->
            <article
              class="flip-card-back overflow-hidden rounded-lg shadow-lg hover:shadow-xl zoom"
              :class="{ tofront: flipMe }"
            >
              <div class="relative bg-turquoise-500 pb-2/3">
                <img
                  alt=" Placeholder"
                  class="absolute h-full w-full object-cover"
                  src="../assets/hacktoberfest2.png"
                />
              </div>

              <div class="px-6 py-4">
                <div class="font-sans font-bold text-xl mb-2">Stock Trader</div>

                <p class="text-gray-700 text-base font-opensans">
                  Final project for Vue course building an app using Vue,
                  vue-router, vuex and Firebase
                </p>
              </div>
            </article>
            <!-- END BACK side -->
          </div>
        </div>
      </div>
      <!-- END Column -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flipMe: false
    };
  }
};
</script>

<style scoped>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container 
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}*/

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
}

/* Style the back side */
.flip-card-back {
  transform: rotateY(180deg);
}

.flipped {
  transform: rotateY(180deg);
}

.tofront {
  transform: rotateY(360deg);
}
</style>
