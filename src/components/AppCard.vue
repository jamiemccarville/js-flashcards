<template>
  <div class="scene scene--card zoom">
    <div class="card" @click="flipped = !flipped" :class="{ flipme: flipped }">
      <div class="card__face card__face--front">
        <div class="popout">
          <h1>FRONT</h1>
        </div>
      </div>
      <div class="card__face card__face--back">
        <div class="popout">
          <h1>BACK</h1>
        </div>
      </div>
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

<style>
.scene {
  width: 200px;
  height: 260px;
  margin: 40px 0;
  perspective: 600px;
  margin: auto;
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
