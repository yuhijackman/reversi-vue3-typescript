<template>
  <div class="row">
    <Cell
      v-for="cell in row.cells"
      :cell="cell"
      :key="cell.x + cell.y"
      @on-place="onPlace"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cell from '@/components/Cell.vue';
import { Row } from '@/services/reversi';

export default defineComponent({
  props: {
    row: {
      type: Row,
      required: true,
    },
  },
  components: {
    Cell,
  },
  setup(props, context) {
    const onPlace = (x: number, y: number) => {
      context.emit('on-place', x, y);
    };

    return {
      onPlace,
    };
  },
});
</script>

<style lang="scss" scoped>
.row {
  width: 100%;
  display: flex;
}
</style>
