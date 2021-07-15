<template>
  <div
    class="cell stone"
    :class="stateClass"
    @click="onPlace"
  >
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { Cell, CellState } from '@/services/reversi';

export default defineComponent({
  props: {
    cell: {
      type: Cell,
      required: true,
    },
  },
  setup(props, context) {
    const stateClass = computed(() => ({
      'stone--white': props.cell.state === CellState.White,
      'stone--black': props.cell.state === CellState.Black,
    }));

    const onPlace = () => {
      context.emit('onPlace', props.cell.x, props.cell.y);
    };

    return {
      stateClass,
      onPlace,
    };
  },
});
</script>

<style lang="scss" scoped>
%stone {
  content: '';
  display: block;
  width: 90px;
  height: 90px;
  border-radius: 45px;
}
.cell {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  &.stone {
    &:after {
      @extend %stone;
    }
    &--white {
      &:after {
        background-color: white;
      }
    }
    &--black {
      &:after {
        background-color: black;
      }
    }
  }
}
</style>
