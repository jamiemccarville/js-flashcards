<template>
  <div>
    <ol class="text-left list-disc">
      <li>Shorter syntax alternative to regular function expression</li>
      <li>Can't be defined on its own, must be stored in a variable or used in place of another anynymous function expression</li>
      <li>
        doesn't create it own
        <span class="font-mono">this</span> value
      </li>
    </ol>
    <div class="w-3/4 h-auto mx-auto mt-3 xl:w-2/4">
      <img
        src="../../../assets/arrow-function-brackets.png"
        alt="function declaration example"
        class="w-auto h-32 mx-auto rounded-lg"
      />
    </div>
    <p class="mt-5">
      If the function only has one statement and that statement returns a value, you can remove both the brackets and the
      <span
        class="font-mone"
      >function</span> keyword
    </p>
    <div class="w-3/4 h-auto mx-auto mt-3 xl:w-2/4">
      <img
        src="../../../assets/arrow-function-concise.png"
        alt="function declaration example"
        class="rounded-lg"
      />
    </div>
  </div>
</template>