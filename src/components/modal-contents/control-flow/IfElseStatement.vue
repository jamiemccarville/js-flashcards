<template>
  <div class="-mt-2">
    <ul class="list-disc">
      <li>
        Enter cat in the
        <span class="font-mono">myPet</span> field then press submit
      </li>
      <li>Try another value other than cat to see what happens</li>
      <div class="w-full px-4 py-6 mt-2 text-gray-300 bg-gray-800">
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
          <span class="mx-2 text-purple-500">else</span> {
          <br />
          <span class="ml-5 text-blue-500">alert</span>(
          <span class="text-yellow-500">'you should get a cat!'</span> );
          <br />}
        </p>
      </div>
    </ul>
    <button
      @click="catSound"
      class="px-2 py-1 mt-2 mb-4 font-semibold border-2 border-solid rounded text-flowlight bg-flowdark hover:text-flowdark hover:bg-flowlight border-flowdark"
    >Submit</button>
    <ul class="-mb-6 list-disc">
      <li>An "if" ... "else" statement matching the code in the snippet is running in the background</li>
      <li>
        when cat is entered, the condition evaluates to
        <span class="font-mono">true</span> and the first code block is executed
      </li>
      <li>
        If any value other than cat is entered, the condition evaluates to
        <span
          class="font-mono"
        >false</span> and the "else" block is executed
      </li>
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
      } else {
        alert("You should get a cat!");
      }
    }
  }
};
</script>

<style>
</style>