<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    placeholder?: string
    modelValue: string | number
    label?: string
    type?: string
    disabled?: boolean
  }>(),
  {
    placeholder: '',
    label: '',
    type: 'text',
    disabled: false
  }
)
</script>

<template>
  <div class="custom-input">
    <div class="label">{{ label }}</div>
    <input
      :disabled="disabled"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style lang="scss" scoped>
.custom-input {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .label {
    color: var(--color-text-label);
    font-size: 12px;
    font-weight: 500;
    line-height: 14.52px;
    text-align: left;
  }
}

input {
  border-radius: 8px;
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

  &[type='number'] {
    appearance: none;

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
}
</style>
