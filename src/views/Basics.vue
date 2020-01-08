<template>
  <div class="min-h-screen page-background">
    <basics-cards></basics-cards>
  </div>
</template>

<script>
//import AppCard from "../components/AppCard";
import BasicsCards from "../components/BasicsCards";
//import HoverCard from "../components/HoverCard";

export default {
  components: {
    BasicsCards
  }
};
</script>
<style scoped>
.page-background {
  background-color: hsl(355.2, 84.3%, 62.5%);
}
</style>
