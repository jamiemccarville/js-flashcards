<template>
  <div class="py-12 text-sm sm:text-base">
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
                <div class="font-sans text-5xl font-semibold sm:text-6xl popout font-cardface">
                  Block
                  <br />Statement
                </div>
              </div>
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--back hover:shadow-xl"
              >
                <div class="font-sans font-light popout">
                  <div class="px-10">
                    <div class="text-left">
                      <p class="font-bold">Block Statement</p>
                      <ul class="list-disc list-inside">
                        <li>The most basic statement</li>
                        <li>The block is bound by a pair of curly brackets</li>
                        <li>
                          commonly used with control flow statements
                          <span
                            class="font-mono font"
                          >(if, for, while)</span>
                        </li>
                      </ul>
                      <div class="flex justify-around mt-8">
                        <img
                          src="../assets/block-statement-ex1.png"
                          alt="block statement example"
                          class="w-6/12 mr-2 sm:w-5/12"
                        />
                        <img
                          src="../assets/block-statement-ex2.png"
                          alt="block statement example 2"
                          class="w-6/12 ml-2 sm:w-5/12"
                        />
                      </div>
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
                <div class="font-sans text-5xl font-semibold sm:text-6xl popout font-cardface">
                  "if"
                  <br />Statement
                </div>
              </div>
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--back hover:shadow-xl"
              >
                <div class="font-sans font-light popout">
                  <div class="px-10">
                    <div class="text-left">
                      <p class="font-bold">
                        The
                        <span class="font-mono">if(...)</span> Statement
                      </p>
                      <ul class="list-disc list-inside">
                        <li>Evaluates a condition in parenthesis</li>
                        <li>if the condition evaluates to true, executes block of code</li>
                      </ul>
                      <div class="mx-auto mt-3">
                        <img
                          src="../assets/if-statement.png"
                          alt="if statement example"
                          class="mx-auto"
                        />
                      </div>
                      <p
                        class="mt-3"
                      >This code will display the alert 'meow!' because the condition (myPet == "cat") evaluates to true</p>
                      <div class="flex">
                        <button
                          class="px-2 py-1 mx-auto mt-3 font-semibold uppercase border-2 border-solid rounded shadow-lg border-fndark hover:bg-flowdark hover:text-flowlight"
                          @click.stop="showIfStatement = true"
                        >Try it!</button>
                      </div>
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
                <div class="font-sans text-5xl font-semibold sm:text-6xl popout font-cardface">
                  Truthy &
                  <br />Falsy
                </div>
              </div>
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--back hover:shadow-xl"
              >
                <div class="font-sans font-light popout">
                  <h3 class="px-10 pt-5 mb-4 text-lg font-semibold sm:text-xl">Truthy and Falsy</h3>
                  <div class="px-12 text-left">
                    <ul class="list-disc">
                      <li>In an "if" statement the condition in the parenthesis needs to evaluated as a boolean (true or false)</li>
                      <li>
                        If the value in the statement is not explicitly or doesn't evaluate to
                        <span
                          class="font-mono"
                        >true</span> or
                        <span class="font-mono">false</span> then it will need to be converted to a boolean
                      </li>
                      <li>
                        JS will use type coercion to implicitly convert the value to either
                        <span
                          class="font-mono"
                        >true</span> or
                        <span class="font-mono">false</span> (happens automatically)
                      </li>
                      <li>
                        There are only 7 falsy values in JS. Any value not on the list is converted to
                        <span
                          class="font-mono"
                        >true</span>
                      </li>
                    </ul>
                    <div class="flex">
                      <button
                        class="px-2 py-1 mx-auto mt-6 mb-6 font-semibold uppercase border-2 border-solid rounded shadow-lg border-fndark hover:bg-flowdark hover:text-flowlight"
                        @click.stop="showFalsy = true"
                      >Falsy Values</button>
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
                <div
                  class="font-sans text-5xl font-semibold sm:text-6xl popout font-cardface"
                >"if" ... "else"</div>
              </div>
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--back hover:shadow-xl"
              >
                <div class="font-sans font-light popout">
                  <div class="px-10">
                    <div class="w-11/12 mx-auto text-left">
                      <ul class="list-disc">
                        <li>An "if" statement can contain an optional "else" block</li>
                        <li>The "else" block executes when the condition is false</li>
                      </ul>
                      <div class="w-3/4 h-auto mx-auto mt-3">
                        <img
                          src="../assets/ifelsestatement.png"
                          alt="comments code
                      snippet"
                          class="mt-4 mb-1 rounded-lg"
                        />
                        <p>- the condition evaluates to false so the else block will run</p>
                        <div class="flex">
                          <button
                            class="px-2 py-1 mx-auto mt-6 mb-6 font-semibold uppercase border-2 border-solid rounded shadow-lg border-fndark hover:bg-flowdark hover:text-flowlight"
                            @click.stop="showIfElse = true"
                          >try it!</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 4 Ends  -->
        </div>
        <!-- END Column -->
        <!-- Column -->
        <div
          class="flex justify-center hidden w-full px-2 py-2 my-1 xl:w-1/2 lg:my-4 lg:px-4 xl:px-2"
        >
          <!-- Card 5 Starts -->
          <div class="scene scene--card zoom">
            <div
              class="card"
              @click="
                fifthCard == undefined
                  ? (fifthCard = 1)
                  : (fifthCard = undefined)
              "
              :class="{ flipme: fifthCard == 1 }"
            >
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--front hover:shadow-xl"
              >
                <div
                  class="font-sans text-5xl font-semibold sm:text-6xl popout font-cardface"
                >Parameters</div>
              </div>
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--back hover:shadow-xl"
              >
                <div class="font-sans font-light popout">
                  <div class="px-10">
                    <div class="w-11/12 mx-auto text-left">
                      <ul class="list-disc">
                        <li>inputs that a function can accept and then perform tasks with</li>
                        <li>they are placeholders for information that will be passed in when the function is called</li>
                        <li>parameter names are created when defining a function</li>
                        <li>multiple parameters must be separated by a comma</li>
                      </ul>
                    </div>
                    <div class="w-3/4 h-auto mx-auto mt-2">
                      <img
                        src="../assets/parameter-example.png"
                        alt="comments code
                      snippet"
                        class="rounded-lg"
                      />
                    </div>
                    <div class="w-3/4 h-auto mx-auto mt-2">
                      <img
                        src="../assets/parameter-example2.png"
                        alt="comments code
                      snippet"
                        class="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 5 Ends  -->
        </div>
        <!-- END Column -->
        <!-- Column -->
        <div
          class="flex justify-center hidden w-full px-2 py-2 my-1 xl:w-1/2 lg:my-4 lg:px-4 xl:px-2"
        >
          <!-- Card 6 Starts -->
          <div class="scene scene--card zoom">
            <div
              class="card"
              @click="
                sixthCard == undefined
                  ? (sixthCard = 1)
                  : (sixthCard = undefined)
              "
              :class="{ flipme: sixthCard == 1 }"
            >
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--front hover:shadow-xl"
              >
                <div
                  class="font-sans text-5xl font-semibold sm:text-6xl popout font-cardface"
                >Arguments</div>
              </div>
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--back hover:shadow-xl"
              >
                <div class="font-sans font-light popout">
                  <div class="px-10">
                    <div class="w-11/12 mx-auto text-left">
                      <ul class="list-disc">
                        <li>Values that are passed to the function when it is called</li>
                        <li>can be passed to the funciton as values or as variables</li>
                      </ul>
                    </div>
                    <div class="w-11/12 h-auto mx-auto mt-3">
                      <img
                        src="../assets/argument-example.png"
                        alt="comments code
                      snippet"
                        class="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 6 Ends  -->
        </div>
        <!-- END Column -->

        <!-- Column -->
        <div
          class="flex justify-center hidden w-full px-2 py-2 my-1 xl:w-1/2 lg:my-4 lg:px-4 xl:px-2"
        >
          <!-- Card 7 Starts -->
          <div class="scene scene--card zoom">
            <div
              class="card"
              @click="
                seventhCard == undefined
                  ? (seventhCard = 1)
                  : (seventhCard = undefined)
              "
              :class="{ flipme: seventhCard == 1 }"
            >
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--front hover:shadow-xl"
              >
                <div class="font-sans text-5xl font-semibold sm:text-6xl popout font-cardface">
                  Return
                  <br />Statement
                </div>
              </div>
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--back hover:shadow-xl"
              >
                <div class="font-sans font-light popout">
                  <div class="px-10">
                    <div class="w-11/12 mx-auto text-left">
                      <ul class="list-disc">
                        <li>Functions always return a value.</li>
                        <li>
                          If there is no
                          <span class="font-mono">return</span> value specified, "undefined" will be returned.
                        </li>
                        <li>
                          when a
                          <span class="font-mono">return</span>
                          statement is used, the execution of the function is stopped. Any code after the
                          <span
                            class="font-mono"
                          >return</span> statement will not be executed
                        </li>
                      </ul>
                    </div>
                    <div class="w-11/12 h-auto mx-auto mt-1">
                      <img
                        src="../assets/return-statement.png"
                        alt="comments code
                      snippet"
                        class="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 7 Ends  -->
        </div>
        <!-- END Column -->

        <!-- Column -->
        <div
          class="flex justify-center hidden w-full px-2 py-2 my-1 xl:w-1/2 lg:my-4 lg:px-4 xl:px-2"
        >
          <!-- Card 8 Starts -->
          <div class="scene scene--card zoom">
            <div
              class="card"
              @click="
                eighthCard == undefined
                  ? (eighthCard = 1)
                  : (eighthCard = undefined)
              "
              :class="{ flipme: eighthCard == 1 }"
            >
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--front hover:shadow-xl"
              >
                <div
                  class="w-10/12 font-sans text-5xl font-semibold sm:text-6xl popout font-cardface"
                >Immediately Invoked Function Expression</div>
              </div>
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--back hover:shadow-xl"
              >
                <div class="font-sans font-light popout">
                  <h3 class="px-10 text-lg font-semibold sm:text-xl">
                    Immediately Invoked Function Expression
                    <br />( IIFE )
                  </h3>
                  <div class="px-10 mt-1">
                    <div class="w-11/12 mx-auto text-left">
                      <ul class="list-disc">
                        <li>A function that is called immediately after it is defined</li>
                        <li>The function expression is wrapped in brackets</li>
                        <li>The function is called by a pair of brackets added to the end of the function</li>
                        <li>Will typically be anonymous as it is only run once</li>
                        <li>will not be added to the global object</li>
                      </ul>
                    </div>
                    <div class="w-3/4 h-auto mx-auto mt-2">
                      <img
                        src="../assets/iife-example.png"
                        alt="comments code
                      snippet"
                        class="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 8 Ends  -->
        </div>
        <!-- END Column -->
      </div>
    </div>
    <app-modal
      v-if="showIfStatement"
      @close="showIfStatement = false"
      backgroundColor="bg-flowlight"
      textColor="text-flowdark"
      buttonColor="bg-flowlight hover:text-flowlight hover:bg-flowdark border-flowdark"
    >
      <template v-slot:header>
        <h3 class="text-xl">"if" Statement in Action</h3>
      </template>
      <template v-slot:body>
        <if-statement></if-statement>
      </template>
    </app-modal>
    <app-modal
      v-if="showFalsy"
      @close="showFalsy = false"
      backgroundColor="bg-flowlight"
      textColor="text-flowdark"
      buttonColor="bg-flowlight hover:text-flowlight hover:bg-flowdark border-flowdark"
    >
      <template v-slot:header>
        <h3 class="text-xl uppercase">Falsy Values</h3>
      </template>
      <template v-slot:body>
        <falsy-values></falsy-values>
      </template>
    </app-modal>
    <app-modal
      v-if="showIfElse"
      @close="showIfElse = false"
      backgroundColor="bg-flowlight"
      textColor="text-flowdark"
      buttonColor="bg-flowlight hover:text-flowlight hover:bg-flowdark border-flowdark"
    >
      <template v-slot:header>
        <h3 class="text-xl uppercase">"if" ... "else"</h3>
      </template>
      <template v-slot:body>
        <if-else></if-else>
      </template>
    </app-modal>
    <div class="mt-10 text-center">
      <a href="#top" class="text-xl underline uppercase text-fndark">
        <button
          class="px-5 py-2 font-semibold uppercase border-2 border-solid rounded shadow-lg border-flowdark hover:bg-flowdark hover:text-flowlight bg-flowlight xl:hidden"
        >Back to Top</button>
      </a>
    </div>
  </div>
</template>

<script>
import AppModal from "../components/AppModal";
import IfStatement from "../components/modal-contents/control-flow/IfStatement";
import FalsyValues from "../components/modal-contents/control-flow/FalsyValues";
import IfElse from "../components/modal-contents/control-flow/IfElseStatement";
export default {
  components: {
    AppModal,
    IfStatement,
    FalsyValues,
    IfElse
  },
  data() {
    return {
      firstCard: undefined,
      secondCard: undefined,
      thirdCard: undefined,
      fourthCard: undefined,
      fifthCard: undefined,
      sixthCard: undefined,
      seventhCard: undefined,
      eighthCard: undefined,
      showModal: false,
      showIfStatement: false,
      showFalsy: false,
      showIfElse: false,
      message: "enter type of pet"
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
  color: hsl(52.2, 84%, 15%);
  text-align: center;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card__face--front {
  background: hsl(52.2, 84.3%, 95%);
}

.card__face--back {
  background: hsl(52.2, 84.3%, 95%);
  transform: rotateY(180deg);
  color: hsl(52.2, 84%, 15%);
}

.popout {
  transform: translateZ(100px);
}
</style>
