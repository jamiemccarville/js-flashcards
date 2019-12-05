<template>
  <div>
    <app-card></app-card>
    <hover-card></hover-card>
  </div>
</template>

<script>
import AppCard from "../components/AppCard";
// import FlippingCard from "../components/FlippingCard";
//import HoverCard from "../components/HoverCard";

export default {
  components: {
    AppCard
  }
};
</script>
<style>
body {
  background-color: darkblue;
}
</style>
