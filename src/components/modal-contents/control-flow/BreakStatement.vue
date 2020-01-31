<template>
  <div>
    <div class="mx-auto md:w-3/4 lg:w-3/4">
      <img
        src="../../../assets/break-statement.png"
        alt="if statement example"
        class="mx-auto mb-2 rounded-lg"
      />
    </div>
    <ul class="-mb-6 list-disc">
      <li>
        If
        <em>fruittype</em> evaluates to
        <span class="font-mono">'Bananas'</span>, the program matches the value with case
        <span class="font-mono">'Bananas'</span> and executes the associated statement
      </li>
      <li>
        When
        <span class="font-mono">break</span> is encountered, the program exits the
        <span class="font-mono">switch</span> and continues execution from the statement following
        <span class="font-mono">switch</span>
      </li>
      <li>
        If
        <span class="font-mono">break</span> were omitted, the statement for case
        <span class="font-mono">'Cherries'</span> would also be executed
      </li>
    </ul>
  </div>
</template>

