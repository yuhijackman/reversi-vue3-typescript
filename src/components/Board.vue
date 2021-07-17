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
import { defineComponent, reactive, watchEffect } from 'vue';
import Row from '@/components/Row.vue';
import { Board, PieceCountsByColor } from '@/models/Board';
import Players from '@/components/Players.vue';
import CellState from '@/types/CellState';

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

    watchEffect((): void => {
      if (board.turn !== CellState.None) {
        const placableCells: PieceCountsByColor = board.placablePieceCountsByColor;
        if (placableCells[board.turn] === 0) {
          board.next();
        }
      }
    });

    watchEffect((): void => {
      const placableCells: PieceCountsByColor = board.placablePieceCountsByColor;
      if (placableCells[CellState.Black] === 0 && placableCells[CellState.White] === 0) {
        board.gameSetMatch();
      }
    });

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
    width: 640px;
    margin: 0 auto;
    border: 10px solid black;
  }
}
</style>
