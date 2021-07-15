<template>
  <main>
    <Score />
    <Players />
    <Board />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Board from '@/components/Board.vue';
import Players from '@/components/Players.vue';
import Score from '@/components/Score.vue';

export default defineComponent({
  name: 'App',
  components: {
    Board,
    Score,
    Players,
  },
});
</script>

<style lang="scss">
body {
  background-color: rgb(255, 227, 205);
}
</style>
