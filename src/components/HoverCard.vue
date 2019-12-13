<template>
  <div class="pt-24">
    <!-- Card 1 Starts -->
    <div class="scene scene--card zoom">
      <div
        class="card"
        @click="
          firstCard == undefined ? (firstCard = 1) : (firstCard = undefined)
        "
        :class="{ flipme: firstCard == 1 }"
      >
        <div
          class="card__face card__face--front shadow-lg hover:shadow-xl rounded-lg flex items-center justify-center"
        >
          <div class="popout text-6xl">Data Types</div>
        </div>
        <div
          class="card__face card__face--back shadow-lg hover:shadow-xl rounded-lg flex items-center justify-center"
        >
          <div class="popout w-9/12 mx-auto">
            <h2>There are 8 Data Types</h2>
            <br />
            <h3 class="text-left underline">7 Primitive Types</h3>
            <div class="text-left">
              <ol>
                <li>Boolean: True and False</li>
                <li>null: a special keyword denoting a null value</li>
                <li>
                  undefined: A top-level property whose value is not defined
                </li>
                <li>Number: An integer or floating point number</li>
                <li>BigInt: An integer with arbitrary precision</li>
                <li>
                  String: A sequence of characters that represent a text value
                </li>
                <li>
                  Symbol: A data type whose instances are unique and immutable
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Card 1 Ends  -->

    <!-- Card 2 Starts -->
    <div class="scene scene--card zoom">
      <div
        class="card"
        @click="
          secondCard == undefined ? (secondCard = 1) : (secondCard = undefined)
        "
        :class="{ flipme: secondCard == 1 }"
      >
        <div
          class="card__face card__face--front shadow-lg hover:shadow-xl rounded-lg flex items-center justify-center"
        >
          <div class="popout text-6xl">Data Types</div>
        </div>
        <div
          class="card__face card__face--back shadow-lg hover:shadow-xl rounded-lg flex items-center justify-center"
        >
          <div class="popout w-9/12 mx-auto">
            <h2>There are 8 Data Types</h2>
            <br />
            <h3 class="text-left underline">7 Primitive Types</h3>
            <div class="text-left">
              <ol>
                <li><span class="font-bold">Boolean:</span> True and False</li>
                <li>null: a special keyword denoting a null value</li>
                <li>
                  undefined: A top-level property whose value is not defined
                </li>
                <li>Number: An integer or floating point number</li>
                <li>BigInt: An integer with arbitrary precision</li>
                <li>
                  String: A sequence of characters that represent a text value
                </li>
                <li>
                  Symbol: A data type whose instances are unique and immutable
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Card 2 Ends -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstCard: undefined,
      secondCard: undefined,
      thirdCard: undefined
    };
  }
};
</script>

<style scoped>
.scene {
  width: 600px;
  height: 400px;
  perspective: 1200px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  transform-origin: center right;
}

.flipme {
  transform: translateX(-100%) rotateY(-180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  color: hsl(351.4, 84%, 20%);
  text-align: center;
  font-weight: bold;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  left: 10px;
  top: 10px;
}

.card__face--front {
  background: hsl(355.2, 84.3%, 95%);
}

.card__face--back {
  background: hsl(355.2, 84.3%, 95%);
  transform: rotateY(180deg);
  color: hsl(351.4, 84%, 20%);
}

.popout {
  transform: translateZ(100px);
}

.zoom {
  transition: transform 0.4s;
}

.zoom:hover {
  transform: scale(1.03);
}

ol {
  list-style-type: none;
  list-style-position: inside;
}
</style>
