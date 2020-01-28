<template>
  <div>
    <ul class="list-disc">
      <li>Enter cat in the myPet field then press submit</li>
      <li>Try another value other than cat to see what happens</li>
      <div class="w-full px-6 py-6 mt-6 text-gray-300 bg-gray-800">
        <p class="font-mono text-blue-500">
          myPet
          <span class="text-purple-500">=</span>
          <input v-model="message" class="w-20 ml-3 text-gray-900" />
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
          <span class="text-yellow-500">'meow!'</span>);
          <br />}
        </p>
      </div>
    </ul>
    <button
      @click="catSound"
      class="px-2 py-1 mt-2 mb-4 font-semibold border-2 border-solid rounded text-flowlight bg-flowdark hover:text-flowdark hover:bg-flowlight border-flowdark"
    >Submit</button>
    <ul class="list-disc list-inside">
      <li>An "if" statement matching the code in the snippet is running in the background</li>
      <li>when cat is entered, the condition evaluates to true and the code is executed, showing the alert 'meow!'</li>
      <li>If any value other than cat is entered, the condition evaluates to false and nothing happens</li>
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
      }
    }
  }
};
</script>

<style>
</style>