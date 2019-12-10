<template>
  <div>
    <div class="scene scene--card zoom">
      <div
        class="card"
        @click="
          firstCard == undefined ? (firstCard = 1) : (firstCard = undefined)
        "
        :class="{ flipme: firstCard == 1 }"
      >
        <div class="card__face card__face--front shadow-lg">
          <div class="popout mt-6">
            <h1>FRONT</h1>
          </div>
        </div>
        <div class="card__face card__face--back shadow-xl">
          <div class="popout mt-6">
            <h1>BACK</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="scene scene--card">
      <div
        id="1"
        class="card"
        @click="
          secondCard == undefined ? (secondCard = 1) : (secondCard = undefined)
        "
        :class="{ flipme: secondCard == 1 }"
      >
        <div class="card__face card__face--front">
          <div class="popout mt-6">
            <h1>FRONT</h1>
          </div>
        </div>
        <div class="card__face card__face--back">
          <div class="popout mt-6">
            <h1>BACK</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstCard: undefined,
      secondCard: undefined,
      thirdCard: undefined,
      flipped: false
    };
  },
  methods: {
    turnOver(event) {
      console.log(event.target.id);
      for (let i = 0; i <= 2; i++) {
        if (event.target.id === i) {
          event.target.id.classList.toggle("flipme");
        } else {
          return;
        }
      }
    }
  }
};
</script>

<style>
.scene {
  width: 200px;
  height: 260px;
  perspective: 600px;
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
  width: 90%;
  height: 90%;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  left: 10px;
  top: 10px;
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
