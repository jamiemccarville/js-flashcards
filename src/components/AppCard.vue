<template>
  <div class="w-7/8 sm:w-10/12 md:w-11/12 my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!--  -->

      <!-- Column -->
      <div
        class="my-1 px-2 py-2 lg:py-0 w-full md:w-1/2 lg:my-4 lg:px-4 xl:px-2 xl:w-1/4"
      >
        <div class="card-container" @click="flipMe">
          <div class="card h-full w-full relative">
            <!-- FRONT side  -->
            <article
              class="front overflow-hidden rounded-lg shadow-lg hover:shadow-xl zoom"
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
              class="back overflow-hidden rounded-lg shadow-lg hover:shadow-xl zoom"
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
  data: function() {
    return {
      playing: false
    };
  },
  methods: {
    flipMe: function() {
      if (this.playing) return;

      this.playing = true;
      anime({
        targets: card,
        scale: [{ value: 1 }, { value: 1.15 }, { value: 1, delay: 250 }],
        rotateY: { value: "+=180", delay: 200 },
        easing: "easeInOutSine",
        duration: 350,
        complete: function(anim) {
          this.playing = false;
        }
      });
    }
  }
};
</script>

<style>
.card-container {
  perspective: 1400px;
}

.card {
  transform-style: preserve-3d;
}

front,
.back {
  display: flex;

  width: 100%;
  height: 100%;

  border-radius: 10px;

  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
}

.back {
  position: absolute;
  top: 0;
  left: 0;

  transform: rotateY(180deg);
}
</style>
