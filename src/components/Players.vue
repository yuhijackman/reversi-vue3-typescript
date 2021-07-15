<template>
  <section class="players">
    <h1 class="players__title">Whose Turn?</h1>
    <div class="players__items">
      <div class="players__item active">
        Player 1
      </div>
      <div class="players__item inactive">
        Player 2
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.players {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: 1.2rem;
  }
  &__items {
    display: flex;
  }
  &__item {
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
