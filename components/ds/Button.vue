<template>
  <component
    :is="tag"
    :type="tag === 'button' ? (type as 'button' | 'submit' | 'reset') : undefined"
    :href="tag === 'a' ? href : undefined"
    :disabled="disabled"
    class="ds-button"
    :class="[
      `ds-button--${variant}`,
      `ds-button--${size}`,
      { 'ds-button--icon-only': iconOnly }
    ]"
    @click="onClick"
  >
    <span v-if="$slots.iconLeft || iconLeft" class="ds-button-icon ds-button-icon--left">
      <slot name="iconLeft">
        <component :is="iconLeft" v-if="iconLeft" />
      </slot>
    </span>
    <span v-if="!iconOnly" class="ds-button-text"><slot /></span>
    <span v-if="$slots.iconRight || iconRight" class="ds-button-icon ds-button-icon--right">
      <slot name="iconRight">
        <component :is="iconRight" v-if="iconRight" />
      </slot>
    </span>
  </component>
</template>

<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'md' | 'sm'

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant
    size?: ButtonSize
    disabled?: boolean
    type?: string
    href?: string
    iconLeft?: object
    iconRight?: object
    iconOnly?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    disabled: false,
    type: 'button',
    iconOnly: false
  }
)

const tag = computed(() => (props.href ? 'a' : 'button'))

const emit = defineEmits<{ (e: 'click', ev: MouseEvent): void }>()
function onClick(ev: MouseEvent) {
  if (!props.disabled) emit('click', ev)
}
</script>

<style scoped>
.ds-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--bb-button-gap);
  font-family: var(--bb-button-font-family);
  font-weight: var(--bb-button-font-weight);
  font-size: var(--bb-button-font-size);
  border-radius: var(--bb-button-border-radius);
  border: none;
  cursor: pointer;
  padding: var(--bb-button-padding-y) var(--bb-button-padding-x);
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.ds-button:focus {
  outline: none;
}

.ds-button:focus-visible {
  box-shadow: 0 0 0 2px var(--bb-background-default), 0 0 0 4px var(--bb-info-default);
}

.ds-button--sm {
  gap: var(--bb-button-gap-sm);
  padding: var(--bb-button-padding-sm-y) var(--bb-button-padding-sm-x);
  font-size: var(--bb-button-font-size-sm);
}

.ds-button--sm .ds-button-icon {
  width: var(--bb-icon-size-sm);
  height: var(--bb-icon-size-sm);
}

.ds-button-icon {
  width: var(--bb-icon-size-md);
  height: var(--bb-icon-size-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
}

.ds-button--primary {
  background-color: var(--bb-button-primary-bg);
  color: var(--bb-button-primary-font-color);
}

.ds-button--primary:hover:not(:disabled) {
  background-color: var(--bb-button-primary-bg-hover);
}

.ds-button--primary:active:not(:disabled) {
  opacity: 0.9;
}

.ds-button--primary:disabled {
  background-color: var(--bb-button-disabled-bg);
  color: var(--bb-button-disabled-font);
  cursor: not-allowed;
}

.ds-button--secondary,
.ds-button--outline {
  background-color: var(--bb-button-secondary-bg);
  color: var(--bb-button-secondary-font-color);
  border: 2px solid var(--bb-button-secondary-border);
}

.ds-button--secondary:hover:not(:disabled),
.ds-button--outline:hover:not(:disabled) {
  background-color: var(--bb-neutral-base);
  border-color: var(--bb-neutral-default);
  color: var(--bb-white-color);
}

.ds-button--secondary:disabled,
.ds-button--outline:disabled {
  border-color: var(--bb-button-disabled-font);
  color: var(--bb-button-disabled-font);
  cursor: not-allowed;
}

.ds-button--ghost {
  background-color: transparent;
  color: var(--bb-button-secondary-font-color);
}

.ds-button--ghost:hover:not(:disabled) {
  background-color: var(--bb-neutral-base);
  color: var(--bb-white-color);
}

.ds-button--ghost:disabled {
  color: var(--bb-button-disabled-font);
  cursor: not-allowed;
}

.ds-button--icon-only {
  padding: var(--bb-button-padding-y);
  width: 48px;
  height: 48px;
}

.ds-button--sm.ds-button--icon-only {
  width: 40px;
  height: 40px;
  padding: var(--bb-button-padding-sm-y);
}
</style>
