<template>
  <!-- refer to notes from JS Advanced Concepts - 2. JS Foundation II > This keyword -->
  <div>
    <ol>
      <li>This is the object that the function is a property of</li>
      <li>rule of thumb, this refers to whatever is to the left of the dot - who called me?</li>
    </ol>
    <p>2 main reasons that 'this' is utilized</p>
    <ol>
      <li>give methods access to their object</li>
      <li>execute same code for multiple objects</li>
    </ol>
    <p>Gotcha's with 'this'</p>
    <ol>
      <li>'this' is not lexically scoped</li>
      <li>it doesn't matter where it was written, it matters how the function was called</li>
    </ol>
  </div>
</template>