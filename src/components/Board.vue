<template>
  <div class="board">
    <Row
      v-for="row in board.rows"
      :row="row"
      :key="row.x"
      @onPlace="onPlace"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Row from '@/components/Row.vue';
import { Board } from '@/services/reversi';

export default defineComponent({
  components: {
    Row,
  },
  setup() {
    const board = reactive(new Board());
    board.init();
    const onPlace = (x: number, y: number) => {
      board.place(x, y);
    };

    return {
      board,
      onPlace,
    };
  },
});
</script>

<style lang="scss" scoped>
.board {
  background-color: green;
  width: 800px;
  margin: 0 auto;
  border: 10px solid black;
}
</style>
