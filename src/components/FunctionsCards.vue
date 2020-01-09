<template>
  <div class="py-40">
    <div class="mx-auto w-7/8 sm:w-10/12 md:w-11/12 md:px-12">
      <div class="flex flex-wrap justify-center">
        <!--  -->

        <!-- Column -->
        <div class="flex justify-center w-full px-2 py-2 my-1 xl:w-1/2 lg:my-4 lg:px-4 xl:px-2">
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
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--front hover:shadow-xl"
              >
                <div class="font-sans text-6xl font-semibold popout">What are Functions?</div>
              </div>
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--back hover:shadow-xl"
              >
                <div class="font-sans font-light popout">
                  <div class="px-10">
                    <div class="text-left">
                      <p>
                        "Generally speaking, a function is a "subprogram" that can be called by code external (or internal in the case of recursion) to the function. Like the program itself, a function is composed of a sequence of statements called the function body. Values can be passed to a function, and the function will return a value.
                        <br />In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called. In brief, they are Function objects."
                      </p>

                      <p class="ml-4 italic">
                        - excerpt from MDN docs. Click
                        <a
                          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"
                          target="blank"
                          class="underline cursor-alias hover:text-fnorange"
                        >here</a>
                        to read more
                      </p>
                      <br />
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
        <div class="flex justify-center w-full px-2 py-2 my-1 xl:w-1/2 lg:my-4 lg:px-4 xl:px-2">
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
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--front hover:shadow-xl"
              >
                <div class="font-sans text-6xl font-semibold popout">
                  Functions:
                  <br />Quick Overview
                </div>
              </div>
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--back hover:shadow-xl"
              >
                <div class="font-sans font-light popout">
                  <div class="px-10">
                    <div class="text-left">
                      <ul class="list-disc list-inside">
                        <li>
                          A function is a
                          <i>subprogram</i> created to perform a certain task
                        </li>
                        <li>
                          To execute a function it has to be called. This is referred to as
                          <i>invoking</i> a function
                        </li>
                        <li>Values can be passed into functions and used within</li>
                        <li>
                          Functions will
                          <strong>always</strong> return a value. In JS, if there is no specific return value specified "undefined" will be returned
                        </li>
                        <li>Functions are objects</li>
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
        <div class="flex justify-center w-full px-2 py-2 my-1 xl:w-1/2 lg:my-4 lg:px-4 xl:px-2">
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
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--front hover:shadow-xl"
              >
                <div class="font-sans text-6xl font-semibold popout">Defining a Function</div>
              </div>
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--back hover:shadow-xl"
              >
                <div class="font-sans font-light popout">
                  <h3
                    class="px-10 pt-5 mb-4 mb-8 text-xl font-semibold"
                  >Click the buttons to see the different ways to define a function</h3>
                  <div class="px-10">
                    <div class="mb-6 text-xl font-semibold">
                      <div class="flex flex-col items-center justify-center w-2/4 mx-auto">
                        <button
                          class="w-full px-2 py-1 mb-4 font-semibold uppercase border-2 border-solid rounded shadow-lg border-fndark hover:bg-fndark hover:text-fnlight"
                          @click.stop="showFnDeclaration = true"
                        >Function Declaration</button>
                        <button
                          class="w-full px-2 py-1 mb-4 font-semibold uppercase border-2 border-solid rounded shadow-lg border-fndark hover:bg-fndark hover:text-fnlight"
                          @click.stop="showFnExpression = true"
                        >Function Expression</button>
                        <button
                          class="w-full px-2 py-1 mb-4 font-semibold uppercase border-2 border-solid rounded shadow-lg border-fndark hover:bg-fndark hover:text-fnlight"
                          @click.stop="showArrowFnExpression = true"
                        >Arrow Function Expression</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3 Ends  -->
        </div>

        <!-- END Column -->
        <!-- Column -->
        <div class="flex justify-center w-full px-2 py-2 my-1 xl:w-1/2 lg:my-4 lg:px-4 xl:px-2">
          <!-- Card 4 Starts -->
          <div class="scene scene--card zoom">
            <div
              class="card"
              @click="
                fourthCard == undefined
                  ? (fourthCard = 1)
                  : (fourthCard = undefined)
              "
              :class="{ flipme: fourthCard == 1 }"
            >
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--front hover:shadow-xl"
              >
                <div class="font-sans text-6xl font-semibold popout">Comments</div>
              </div>
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--back hover:shadow-xl"
              >
                <div class="font-sans font-light popout">
                  <div class="px-10">
                    <div class="mb-6 text-2xl font-semibold">
                      <h3>2 Types of Comments</h3>
                    </div>
                    <div class="flex justify-center">
                      <img
                        src="../assets/js-comments.svg"
                        alt="comments code
                      snippet"
                        class="w-auto h-48 rounded-lg"
                      />
                    </div>
                    <div class="w-11/12 mx-auto mt-6 text-left">
                      <ul class="list-disc">
                        <li>
                          Comments are treated like white space and they are
                          discarded when the script is executed
                        </li>
                        <li>
                          They can be used to leave notes or descriptions of
                          code and also to prevent a selection of code from
                          running
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 4 Ends  -->
        </div>
      </div>
      <!-- END Column -->
    </div>
    <app-modal
      v-if="showFnDeclaration"
      @close="showFnDeclaration = false"
      backgroundColor="bg-fnlight"
      textColor="text-fndark"
      buttonColor="bg-fnlight hover:text-fnlight hover:bg-fndark border-fndark"
    >
      <template v-slot:header>
        <h3 class="text-xl uppercase">Function Declaration</h3>
      </template>
      <template v-slot:body>
        <fn-decl></fn-decl>
      </template>
    </app-modal>
    <app-modal
      v-if="showFnExpression"
      @close="showFnExpression = false"
      backgroundColor="bg-fnlight"
      textColor="text-fndark"
      buttonColor="bg-fnlight hover:text-fnlight hover:bg-fndark border-fndark"
    >
      <template v-slot:header>
        <h3 class="text-xl uppercase">Function Expression</h3>
      </template>
      <template v-slot:body>
        <fn-expr></fn-expr>
      </template>
    </app-modal>
    <app-modal
      v-if="showArrowFnExpression"
      @close="showArrowFnExpression = false"
      backgroundColor="bg-fnlight"
      textColor="text-fndark"
      buttonColor="bg-fnlight hover:text-fnlight hover:bg-fndark border-fndark"
    >
      <template v-slot:header>
        <h3 class="text-xl uppercase">Arrow Function Expression</h3>
      </template>
      <template v-slot:body>
        <arrow-fn-expr></arrow-fn-expr>
      </template>
    </app-modal>
  </div>
</template>

<script>
import AppModal from "../components/AppModal";
import FnDecl from "../components/modal-contents/functions/FnDecl";
import FnExpr from "../components/modal-contents/functions/FnExpr";
import ArrowFnExpr from "../components/modal-contents/functions/ArrowFnExpr";
export default {
  components: {
    AppModal,
    FnDecl,
    FnExpr,
    ArrowFnExpr
  },
  data() {
    return {
      firstCard: undefined,
      secondCard: undefined,
      thirdCard: undefined,
      fourthCard: undefined,
      fifthCard: undefined,
      showModal: false,
      showFnDeclaration: false,
      showFnExpression: false,
      showArrowFnExpression: false
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
  color: hsl(22.2, 84%, 20%);
  text-align: center;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card__face--front {
  background: hsl(22.2, 84.3%, 95%);
}

.card__face--back {
  background: hsl(22.2, 84.3%, 95%);
  transform: rotateY(180deg);
  color: hsl(22.2, 84%, 20%);
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
</style>
