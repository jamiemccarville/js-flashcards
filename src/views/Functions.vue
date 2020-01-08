<template>
  <div class="min-h-screen page-background">
    <functions-cards></functions-cards>
  </div>
</template>

<script>
//import AppCard from "../components/AppCard";
import FunctionsCards from "../components/FunctionsCards";
//import HoverCard from "../components/HoverCard";

export default {
  components: {
    FunctionsCards
  }
};
</script>
<style scoped>
.page-background {
  background-color: hsl(22.2, 84.3%, 62.5%);
}
</style>
