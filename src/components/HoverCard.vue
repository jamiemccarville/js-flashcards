<template>
  <div class="flip-card zoom" @click="flipMe = !flipMe">
    <div class="flip-card-inner">
      <div class="flip-card-front" :class="{ flipped: flipMe }">
        <div class="bg-blue-500">
          <h1>JS Basics</h1>
          <p>Types in JS</p>
        </div>
      </div>
      <div class="flip-card-back" :class="{ tofront: flipMe }">
        <div class="popout mt-20">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
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
  background: transparent;
  width: 300px;
  height: 500px;
  perspective: 1500px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
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
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  color: black;
  background-color: purple;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: black;
  transform: rotateY(180deg);
}

.flipped {
  transform: rotateY(180deg);
}

.tofront {
  transform: rotateY(360deg);
}

.zoom {
  transition: transform 0.4s;
}

.zoom:hover {
  transform: scale(1.03);
}

.popout {
  transform: translateZ(80px);
}
</style>
