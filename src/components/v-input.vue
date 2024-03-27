<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    placeholder?: string
    modelValue: string
  }>(),
  {
    placeholder: ''
  }
)
</script>

<template>
  <input
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>
input {
  border-radius: 5px;
  background: var(--vt-c-white);
  border: none;
  outline: none;
  padding: 11px 12px;
  box-shadow: 0 0 10px 0 var(--color-shadow);
  font-size: 12px;
  font-weight: 500;
  line-height: 14.52px;
  text-align: left;
  color: var(--color-input-text);
}
</style>
