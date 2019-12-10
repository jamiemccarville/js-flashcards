<template>
  <div class="w-7/8 sm:w-10/12 md:w-11/12 my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!--  -->

      <!-- Column -->
      <div class="my-1 px-2 py-2 lg:py-0 w-full md:w-1/2 lg:my-4 lg:px-4 xl:px-2 xl:w-1/4">
        <!-- Scene -->
        <div class="scene scene--card zoom">
          <!-- Card -->
          <div class="card" @click="flipped = !flipped" :class="{ flipme: flipped }">
            <!-- FRONT side  -->
            <div class="card__face card__face--front">
              <div class="popout">
                <h1>FRONT</h1>
              </div>
            </div>
            <!-- END FRONT side -->

            <!--  BACK side  -->
            <div class="card__face card__face--back">
              <div class="popout">
                <h1>BACK</h1>
              </div>
            </div>
            <!-- END BACK side -->
          </div>
        </div>
      </div>
      <!-- END Column -->

      <!-- Column -->
      <div class="my-1 px-2 py-2 lg:py-0 w-full md:w-1/2 lg:my-4 lg:px-4 xl:px-2 xl:w-1/4">
        <!-- Scene -->
        <div class="scene scene--card zoom">
          <!-- Card -->
          <div class="card" @click="flipped = !flipped" :class="{ flipme: flipped }">
            <!-- FRONT side  -->
            <div class="card__face card__face--front">
              <div class="popout">
                <h1>FRONT</h1>
              </div>
            </div>
            <!-- END FRONT side -->

            <!--  BACK side  -->
            <div class="card__face card__face--back">
              <div class="popout">
                <h1>BACK</h1>
              </div>
            </div>
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
      flipped: false
    };
  }
};
</script>

<style scoped>
.scene {
  width: 200px;
  height: 260px;
  margin: 40px 0;
  perspective: 1500px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.flipme {
  transform: rotateY(180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 260px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card__face--front {
  background: red;
}

.card__face--back {
  background: blue;
  transform: rotateY(180deg);
}

.popout {
  transform: translateZ(80px);
}

.zoom {
  transition: transform 0.4s;
}

.zoom:hover {
  transform: scale(1.03);
}
</style>
