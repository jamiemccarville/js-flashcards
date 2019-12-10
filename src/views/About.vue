<template>
  <div class="bg-blue-500 h-screen">
    <hover-card></hover-card>
  </div>
</template>

<script>
//import AppCard from "../components/AppCard";
// import FlippingCard from "../components/FlippingCard";
import HoverCard from "../components/HoverCard";

export default {
  components: {
    HoverCard
  }
};
</script>
<style scoped>
body {
  background-color: darkblue;
}
</style>
