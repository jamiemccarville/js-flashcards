<template>
  <div class="aboutBg min-h-screen -mt-24">
    <flash-card></flash-card>
  </div>
</template>

<script>
//import AppCard from "../components/AppCard";
import FlashCard from "../components/FlashCard";
//import HoverCard from "../components/HoverCard";

export default {
  components: {
    FlashCard
  }
};
</script>
<style scoped>
.aboutBg {
  background-color: hsl(355.2, 84.3%, 62.5%);
}
</style>
