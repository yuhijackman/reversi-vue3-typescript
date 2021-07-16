<template>
  <div class="board">
    <div class="alert" v-if="board.end">
      End
    </div>
    <Players
      :turn="board.turn"
      :pieceCountsByColor="board.pieceCountsByColor"
    />
    <div class="board__content">
      <Row
        v-for="row in board.rows"
        :row="row"
        :key="row.x"
        @onPlace="onPlace"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Row from '@/components/Row.vue';
import { Board } from '@/models/Board';
import Players from '@/components/Players.vue';

export default defineComponent({
  components: {
    Row,
    Players,
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
  &__content {
    background-color: green;
    width: 800px;
    margin: 0 auto;
    border: 10px solid black;
  }
}
</style>
