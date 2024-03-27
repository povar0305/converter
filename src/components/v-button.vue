<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    active?: boolean
  }>(),
  {
    active: false
  }
)
</script>

<template>
  <button :class="{ active: active }">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  padding: 9.5px 12px;
  border: none;
  outline: none;
  box-shadow: 0 0 10px 0 var(--color-shadow);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  text-align: left;
  cursor: pointer;
  background: var(--vt-c-white);
  color: var(--color-text);
}

.active {
  background: var(--color-accent);
  color: var(--vt-c-white);
}
</style>
