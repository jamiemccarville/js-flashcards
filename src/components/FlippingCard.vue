<template>
  <div class="card-container">
    <div class="card">
      <div class="front" @click="flipMe = !flipMe" :class="{ red: flipMe }">
        A
      </div>
      <div class="back" @click="flipMe = !flipMe" :class="{ red: flipMe }">
        B
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
body {
  background: #cfd8dc;
}

.card-container {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
}

.card {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.front {
  color: #fff;
  background: #2196f3;
}

.back {
  color: #2196f3;
  background: #fff;
  transform: rotateY(180deg);
}
.red {
  background-color: red;
  transform: rotateY(180deg);
}
</style>
