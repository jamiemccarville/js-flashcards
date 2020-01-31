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
                          class="w-6/12 mr-2 rounded-lg"
                        />
                        <img
                          src="../assets/block-statement-ex2.png"
                          alt="block statement example 2"
                          class="w-6/12 ml-2 rounded-lg"
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
                        <li>
                          if the condition evaluates to
                          <span class="font-mono">true</span>, executes block of code
                        </li>
                      </ul>
                      <div class="mx-auto mt-3">
                        <img
                          src="../assets/if-statement.png"
                          alt="if statement example"
                          class="w-7/12 mx-auto rounded-lg"
                        />
                      </div>
                      <p class="mt-3">
                        This code will display the
                        <span class="font-mono">alert</span> 'meow!' because the condition (myPet == "cat") evaluates to
                        <span
                          class="font-mono"
                        >true</span>
                      </p>
                      <div class="flex">
                        <button
                          class="px-2 py-1 mx-auto mt-3 font-semibold uppercase border-2 border-solid rounded shadow-lg border-fndark hover:bg-flowdark hover:text-flowlight"
                          @click.stop="showIfStatementEx = true"
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
                      <li>
                        In an "if" statement the condition in the parenthesis needs to evaluated as a boolean (
                        <span
                          class="font-mono"
                        >true</span> or
                        <span class="font-mono">false</span>)
                      </li>
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
                        <li>
                          The "else" block executes when the condition is
                          <span
                            class="font-mono"
                          >false</span>
                        </li>
                      </ul>
                      <div class="w-10/12 h-auto mx-auto mt-3">
                        <img
                          src="../assets/ifelsestatement.png"
                          alt="comments code
                      snippet"
                          class="mt-4 mb-1 rounded-lg"
                        />
                        <p>
                          - the condition evaluates to
                          <span class="font-mono">false</span> so the else block will run
                        </p>
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
        <div class="flex justify-center w-full px-2 py-2 my-1 xl:w-1/2 lg:my-4 lg:px-4 xl:px-2">
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
                >"else if"</div>
              </div>
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--back hover:shadow-xl"
              >
                <div class="font-sans font-light popout">
                  <div class="px-10">
                    <div class="w-11/12 mx-auto text-left">
                      <ul class="list-disc">
                        <li>You may have an instance where you want to test multiple conditions</li>
                        <li>you can use the "else if" clause to do that</li>
                      </ul>
                      <div class="mx-auto mt-4">
                        <img
                          src="../assets/elseif.png"
                          alt="if statement example"
                          class="w-10/12 mx-auto rounded-lg"
                        />
                      </div>
                      <div class="flex">
                        <button
                          class="px-2 py-1 mx-auto mt-6 mb-4 font-semibold uppercase border-2 border-solid rounded shadow-lg border-fndark hover:bg-flowdark hover:text-flowlight"
                          @click.stop="showElseIf = true"
                        >try it!</button>
                      </div>
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
        <div class="flex justify-center w-full px-2 py-2 my-1 xl:w-1/2 lg:my-4 lg:px-4 xl:px-2">
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
                <div class="font-sans text-5xl font-semibold sm:text-6xl popout font-cardface">
                  Ternary
                  <br />Operator
                </div>
              </div>
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--back hover:shadow-xl"
              >
                <div class="font-sans font-light popout">
                  <div class="px-10">
                    <div class="w-11/12 mx-auto text-left">
                      <ul class="list-disc">
                        <li>The ternary operator is the only JS operator that takes three operands</li>
                        <ol class="my-2 list-decimal list-inside">
                          <li>a condition followed by a question mark (?)</li>
                          <li>an expression that executes if the condition is truthy, followed by a colon (:)</li>
                          <li>an expression that executes if the condition is falsy</li>
                        </ol>
                        <li>the ternary operator is commonly used as a shortcut for the "if" statement</li>
                      </ul>
                    </div>
                  </div>
                  <div class="mx-auto mt-3">
                    <img
                      src="../assets/ternary-operator.png"
                      alt="if statement example"
                      class="w-10/12 mx-auto rounded-lg"
                    />
                  </div>
                  <div class="flex hidden">
                    <button
                      class="px-2 py-1 mx-auto mt-4 mb-2 font-semibold uppercase border-2 border-solid rounded shadow-lg border-fndark hover:bg-flowdark hover:text-flowlight"
                      @click.stop="showTernary = true"
                    >see example</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 6 Ends  -->
        </div>
        <!-- END Column -->

        <!-- Column -->
        <div class="flex justify-center w-full px-2 py-2 my-1 xl:w-1/2 lg:my-4 lg:px-4 xl:px-2">
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
                  Switch
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
                        <li>
                          allows a program to evaluate an expression and attempt to match the expression's value to a
                          <span
                            class="font-mono"
                          >case</span> label
                        </li>
                        <li>If a match is found, the program executes the associated statement</li>
                      </ul>
                      <div class="flex">
                        <button
                          class="px-2 py-1 mx-auto mt-1 mb-2 font-semibold uppercase border-2 border-solid rounded shadow-lg border-fndark hover:bg-flowdark hover:text-flowlight"
                          @click.stop="showSwitch = true"
                        >see example</button>
                      </div>
                      <p class="-ml-5 underline">JS evaluates the switch statement as follows:</p>
                      <ul class="list-disc">
                        <li>
                          Program first looks for a
                          <span class="font-mono">case</span> clause with a label matching the value of expression, then transfers control to that clause, executing the associated statements
                        </li>
                        <li>
                          If no matching label is found, the program looks for the optional
                          <span
                            class="font-mono"
                          >default</span> clause:
                        </li>
                        <ul class="ml-4 list-disc">
                          <li>
                            <span class="font-mono">default</span> clause is found - program transfers control to that clause, executing the associated statements
                          </li>
                          <li>
                            No
                            <span class="font-mono">default</span> clause found - program resumes execution at statement following the end of
                            <span
                              class="font-mono"
                            >switch</span>
                          </li>
                        </ul>
                      </ul>
                      <p class="italic text-center">
                        (text and example from
                        <a
                          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling"
                          target="blank"
                          class="underline cursor-alias hover:text-minion"
                        >MDN</a>
                        docs.)
                      </p>
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
        <div class="flex justify-center w-full px-2 py-2 my-1 xl:w-1/2 lg:my-4 lg:px-4 xl:px-2">
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
                >Break Statement</div>
              </div>
              <div
                class="flex items-center justify-center rounded-lg shadow-lg card__face card__face--back hover:shadow-xl"
              >
                <div class="font-sans font-light popout">
                  <h3 class="px-10 text-lg font-semibold sm:text-xl">Break Statement</h3>
                  <div class="px-10 mt-1">
                    <div class="w-11/12 mx-auto text-left">
                      <ul class="list-disc">
                        <li>
                          The optional
                          <span class="font-mono">break</span> statement associated with each
                          <span class="font-mono">case</span> clause ensures that the program breaks out of
                          <span
                            class="font-mono"
                          >switch</span> once the matched statement is executed, and then continues execution at the statement following
                          <span
                            class="font-mono"
                          >switch</span>.
                        </li>
                        <li>
                          If
                          <span class="font-mono">break</span> is omitted, the program continues execution inside the
                          <span
                            class="font-mono"
                          >switch</span> statement (and will evaluate the next
                          <span class="font-mono">case</span>, and so on)
                        </li>
                      </ul>
                      <div class="flex">
                        <button
                          class="px-2 py-1 mx-auto mt-6 mb-4 font-semibold uppercase border-2 border-solid rounded shadow-lg border-fndark hover:bg-flowdark hover:text-flowlight"
                          @click.stop="showBreak = true"
                        >see example</button>
                      </div>
                      <p class="mt-10 italic text-center">
                        (text and example from
                        <a
                          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling"
                          target="blank"
                          class="underline cursor-alias hover:text-minion"
                        >MDN</a>
                        docs.)
                      </p>
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
      v-if="showIfStatementEx"
      @close="showIfStatementEx = false"
      backgroundColor="bg-flowlight"
      textColor="text-flowdark"
      buttonColor="bg-flowlight hover:text-flowlight hover:bg-flowdark border-flowdark"
    >
      <template v-slot:header>
        <h3 class="text-xl">"if" Statement in Action</h3>
      </template>
      <template v-slot:body>
        <if-statement-ex></if-statement-ex>
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
    <app-modal
      v-if="showElseIf"
      @close="showElseIf = false"
      backgroundColor="bg-flowlight"
      textColor="text-flowdark"
      buttonColor="bg-flowlight hover:text-flowlight hover:bg-flowdark border-flowdark"
    >
      <template v-slot:header>
        <h3 class="text-xl uppercase">"else if"</h3>
      </template>
      <template v-slot:body>
        <multiple-conditions></multiple-conditions>
      </template>
    </app-modal>
    <app-modal
      v-if="showTernary"
      @close="showTernary = false"
      backgroundColor="bg-flowlight"
      textColor="text-flowdark"
      buttonColor="bg-flowlight hover:text-flowlight hover:bg-flowdark border-flowdark"
    >
      <template v-slot:header>
        <h3 class="text-xl uppercase">Ternary Operator</h3>
      </template>
      <template v-slot:body>
        <ternary-operator></ternary-operator>
      </template>
    </app-modal>
    <app-modal
      v-if="showSwitch"
      @close="showSwitch = false"
      backgroundColor="bg-flowlight"
      textColor="text-flowdark"
      buttonColor="bg-flowlight hover:text-flowlight hover:bg-flowdark border-flowdark"
    >
      <template v-slot:header>
        <h3 class="text-xl uppercase">Switch Statement</h3>
      </template>
      <template v-slot:body>
        <switch-statement></switch-statement>
      </template>
    </app-modal>
    <app-modal
      v-if="showBreak"
      @close="showBreak = false"
      backgroundColor="bg-flowlight"
      textColor="text-flowdark"
      buttonColor="bg-flowlight hover:text-flowlight hover:bg-flowdark border-flowdark"
    >
      <template v-slot:header>
        <h3 class="text-xl uppercase">Break Statement</h3>
      </template>
      <template v-slot:body>
        <break-statement></break-statement>
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
import IfStatementEx from "../components/modal-contents/control-flow/IfStatementEx";
import FalsyValues from "../components/modal-contents/control-flow/FalsyValues";
import IfElse from "../components/modal-contents/control-flow/IfElseStatement";
import MultipleConditions from "../components/modal-contents/control-flow/MultipleConditions";
import TernaryOperator from "../components/modal-contents/control-flow/TernaryOperator";
import SwitchStatement from "../components/modal-contents/control-flow/SwitchStatement";
import BreakStatement from "../components/modal-contents/control-flow/BreakStatement";
export default {
  components: {
    AppModal,
    IfStatementEx,
    FalsyValues,
    IfElse,
    MultipleConditions,
    TernaryOperator,
    SwitchStatement,
    BreakStatement
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
      showIfStatementEx: false,
      showFalsy: false,
      showIfElse: false,
      showElseIf: false,
      showTernary: false,
      showSwitch: false,
      showBreak: false
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
