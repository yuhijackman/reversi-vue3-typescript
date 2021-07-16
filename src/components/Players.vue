<template>
  <section class="players">
    <div class="players__items">
      <div
        class="players__item"
        :class="blackClass"
      >
        <h2>Black</h2>
        <p>{{ pieceCountsByColor.black }}</p>
      </div>
      <div
        class="players__item"
        :class="whiteClass"
      >
        <h2>White</h2>
        <p>{{ pieceCountsByColor.white }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { PieceCountsByColor } from '@/models/Board';
import CellState from '@/types/CellState';

export default defineComponent({
  props: {
    turn: {
      required: true,
      type: String as PropType<CellState>,
    },
    pieceCountsByColor: {
      required: true,
      type: Object as PropType<PieceCountsByColor>,
    },
  },
  setup(props) {
    const blackClass = computed(() => ({
      active: props.turn === CellState.Black,
      inactive: props.turn === CellState.White,
    }));
    const whiteClass = computed(() => ({
      active: props.turn === CellState.White,
      inactive: props.turn === CellState.Black,
    }));
    return {
      blackClass,
      whiteClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.players {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__items {
    display: flex;
  }
  &__item {
    text-align: center;
    p {
      margin: 10px 0;
    }
    &:first-child {
      margin-right: 10px;
    }
    &.active {
      color: green;
    }
    &.inactive {
      color: gray;
    }
  }
}
</style>
