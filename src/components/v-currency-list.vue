<script lang="ts" setup>
const props = defineProps<{
  list: any
}>()
</script>

<template>
  <div class="list">
    <div v-for="(option, i) of list" :key="'currency' + i" class="item">
      <p class="name">
        {{ i }}
      </p>
      <p class="price">
        {{ option.toFixed(2) }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 24px;

  .item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 12px 24px 12px;

    p {
      font-size: 14px;
      font-weight: 600;
      line-height: 16.94px;
      text-align: left;
      color: var(--color-text);
      text-transform: uppercase;
    }

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-border);
    }
  }
}
</style>
