<template>
  <div>
    <ul class="list-disc">
      <li>Enter a pet in the myPet field then press submit</li>

      <div class="w-full px-4 py-6 mt-3 text-gray-300 bg-gray-800">
        <p class="font-mono text-gray-200">
          <span class="mr-2 text-purple-500">let</span>
          <span class="mr-2 text-blue-500">myPet</span>

          <span class="text-purple-500">=</span>
          <input v-model="message" class="w-20 ml-3 text-gray-900" />;
        </p>
        <br />
        <p class="font-mono">
          <span class="text-purple-500">if</span>
          (
          <span class="text-blue-500">myPet</span>
          <span class="mx-2 text-purple-500">==</span>
          <span class="text-yellow-500">"cat"</span>
          ) {
          <br />
          <span class="ml-5 text-blue-500">alert</span>(
          <span class="text-yellow-500">'meow!'</span> );
          <br />}
          <span class="mx-2 text-purple-500">else if</span> (
          <span class="text-blue-500">myPet</span>
          <span class="mx-2 text-purple-500">==</span>
          <span class="text-yellow-500">"dog"</span>
          ) {
          <br />{
          <span class="ml-5 text-blue-500">alert</span>(
          <span class="text-yellow-500">'woof woof'</span> );
          <br />}
          <span class="mx-2 text-purple-500">else</span> {
          <br />
          <span class="ml-5 text-blue-500">alert</span>(
          <span class="text-yellow-500">'get a cat or dog!'</span> );
          <br />}
        </p>
      </div>
    </ul>
    <button
      @click="catSound"
      class="px-2 py-1 mt-2 mb-4 font-semibold border-2 border-solid rounded text-flowlight bg-flowdark hover:text-flowdark hover:bg-flowlight border-flowdark"
    >Submit</button>
    <ul class="list-disc">
      <li>when cat is entered, the first condition evaluates to true and the first code block is executed</li>
      <li>when dog is entered, the second condition evaluates to true and the "else if" code block is executed</li>
      <li>If any other value is entered, the two conditions evaluate to false and the "else" block is executed</li>
    </ul>
  </div>
</template>



<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  methods: {
    catSound: function() {
      if (this.message == "cat") {
        alert("meow!");
      } else if (this.message == "dog") {
        alert("woof woof!");
      } else {
        alert("get a cat or dog!");
      }
    }
  }
};
</script>

<style>
</style>