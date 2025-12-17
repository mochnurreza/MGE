<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
    class="
      text-white text-sm font-bold uppercase
      px-6 py-3 rounded shadow
      outline-none focus:outline-none
      ease-linear transition-all duration-150
      disabled:opacity-50 disabled:cursor-not-allowed
      w-full
    "
    :class="buttonClass"
  >
    <span v-if="loading">Loading...</span>
    <slot v-else />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  variant: {
    type: String,
    default: "green",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  full: {
    type: Boolean,
    default: true,
  },
});

defineEmits(["click"]);

const buttonClass = computed(() => {
  const variants = {
    green: "bg-emerald-500 hover:shadow-lg active:bg-green-700",
    blue: "bg-blue-500 hover:shadow-lg active:bg-blue-700",
    red: "bg-red-500 hover:shadow-lg active:bg-red-700",
    gray: "bg-blueGray-500 hover:shadow-lg active:bg-gray-700",
  };

  return [
    variants[props.variant],
    props.full ? "w-full" : "w-auto",
  ];
});
</script>
