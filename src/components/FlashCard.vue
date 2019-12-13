<template>
  <div class="py-40">
    <div class="w-7/8 sm:w-10/12 md:w-11/12 mx-auto md:px-12">
      <div class="flex flex-wrap justify-center">
        <!--  -->

        <!-- Column -->
        <div
          class="my-1 px-2 py-2 w-full xl:w-1/2 lg:my-4 lg:px-4 xl:px-2 xl:w-1/2 flex justify-center"
        >
          <!-- Card 1 Starts -->
          <div class="scene scene--card zoom">
            <div
              class="card"
              @click="
                firstCard == undefined
                  ? (firstCard = 1)
                  : (firstCard = undefined)
              "
              :class="{ flipme: firstCard == 1 }"
            >
              <div
                class="card__face card__face--front shadow-lg hover:shadow-xl rounded-lg flex items-center justify-center"
              >
                <div class="popout text-6xl font-sans font-semibold">What is JS?</div>
              </div>
              <div
                class="card__face card__face--back shadow-lg hover:shadow-xl rounded-lg flex items-center justify-center"
              >
                <div class="popout font-sans font-light">
                  <div class="px-10">
                    <div class="text-left">
                      <p>
                        JavaScript (JS) is a lightweight, interpreted, or
                        just-in-time compiled programming language with
                        first-class functions. While it is most well-known as
                        the scripting language for Web pages, many non-browser
                        environments also use it, such as Node.js, Apache
                        CouchDB and Adobe Acrobat. JavaScript is a
                        prototype-based, multi-paradigm, single-threaded,
                        dynamic language, supporting object-oriented,
                        imperative, and declarative (e.g. functional
                        programming) styles.
                      </p>

                      <p class="italic ml-4">
                        - excerpt from MDN docs. Click
                        <a
                          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                          target="blank"
                          class="underline cursor-alias hover:text-basicred"
                        >here</a>
                        to read more
                      </p>
                      <br />
                      <ul class="list-disc list-inside">
                        <li>
                          You can learn more about the technical terms at
                          <a
                            href="https://en.wikipedia.org/wiki/JavaScript"
                            target="black"
                            class="underline cursor-alias hover:text-basicred"
                          >Wikepedia</a>
                        </li>
                        <li>
                          You can also find a quick JS intro at
                          <a
                            href="https://javascript.info/intro"
                            target="blank"
                            class="underline hover:text-basicred cursor-alias"
                          >javascript.info</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 1 Ends  -->
        </div>

        <!-- END Column -->
        <!-- Column -->
        <div
          class="my-1 px-2 py-2 w-full xl:w-1/2 lg:my-4 lg:px-4 xl:px-2 xl:w-1/2 flex justify-center"
        >
          <!-- Card 2 Starts -->
          <div class="scene scene--card zoom">
            <div
              class="card"
              @click="
                secondCard == undefined
                  ? (secondCard = 1)
                  : (secondCard = undefined)
              "
              :class="{ flipme: secondCard == 1 }"
            >
              <div
                class="card__face card__face--front shadow-lg hover:shadow-xl rounded-lg flex items-center justify-center"
              >
                <div class="popout text-6xl font-sans font-semibold">Data Types</div>
              </div>
              <div
                class="card__face card__face--back shadow-lg hover:shadow-xl rounded-lg flex items-center justify-center"
              >
                <div class="popout font-sans font-light">
                  <div class="px-10">
                    <h3 class="font-sans uppercase text-3xl mb-2 font-normal">8 Data Types</h3>
                    <div class="text-left">
                      <ul>
                        <li class="font-normal underline">7 Primitive</li>
                        <ol class="list-decimal list-inside pl-4">
                          <li>
                            <span class="font-bold mr-2">Boolean:</span> True
                            and False
                          </li>
                          <li>
                            <span class="font-bold mr-2">null:</span> a special
                            keyword denoting a null value
                          </li>
                          <li>
                            <span class="font-bold mr-2">undefined:</span> A
                            top-level property whose value is not defined
                          </li>
                          <li>
                            <span class="font-bold mr-2">Number:</span> An
                            integer or floating point number
                          </li>
                          <li>
                            <span class="font-bold mr-2">BigInt:</span> An
                            integer with arbitrary precision
                          </li>
                          <li>
                            <span class="font-bold mr-2">String:</span> A
                            sequence of characters that represent a text value
                          </li>
                          <li>
                            <span class="font-bold mr-2">Symbol:</span> A data
                            type whose instances are unique and immutable
                          </li>
                        </ol>
                        <li>
                          <span class="font-bold">+ Object</span> (see objects
                          section for more details)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 2 Ends  -->
        </div>

        <!-- END Column -->
        <!-- Column -->
        <div
          class="my-1 px-2 py-2 w-full xl:w-1/2 lg:my-4 lg:px-4 xl:px-2 xl:w-1/2 flex justify-center"
        >
          <!-- Card 3 Starts -->
          <div class="scene scene--card zoom">
            <div
              class="card"
              @click="
                thirdCard == undefined
                  ? (thirdCard = 1)
                  : (thirdCard = undefined)
              "
              :class="{ flipme: thirdCard == 1 }"
            >
              <div
                class="card__face card__face--front shadow-lg hover:shadow-xl rounded-lg flex items-center justify-center"
              >
                <div class="popout text-6xl font-sans font-semibold">Variables & Statements</div>
              </div>
              <div
                class="card__face card__face--back shadow-lg hover:shadow-xl rounded-lg flex items-center justify-center"
              >
                <div class="popout font-sans font-light">
                  <div class="px-10">
                    <h3 class="font-sans uppercase text-3xl mb-2 font-normal">8 Data Types</h3>
                    <div class="text-left"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 3 Ends  -->
        </div>

        <!-- END Column -->
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
      thirdCard: undefined
    };
  }
};
</script>
<style scoped>
.scene {
  perspective: 1200px;
  height: 450px;
  width: 500px;
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
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
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
ul > li {
  padding: 5px 0px;
}
</style>
