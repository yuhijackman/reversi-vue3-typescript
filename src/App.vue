<template>
  <main>
    <Board />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Board from '@/components/Board.vue';

export default defineComponent({
  name: 'App',
  components: {
    Board,
  },
});
</script>

<style lang="scss">
body {
  background-color: rgb(255, 227, 205);
}
h2, p {
  margin: 0;
}
</style>
