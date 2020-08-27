<template>
  <button
    class="cox-button"
    @click="handleClick"
    :disabled="disabled"
    :type="type"
    :autofocus="autofocus"
    :class="[
      size ? 'el-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "CoxButton",

  props: {
    type: {
      type: String,
      default: "default",
    },
    size: String,
    autofocus: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
  },
};
</script>

<style lang="scss"></style>
