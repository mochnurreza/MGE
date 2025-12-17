<template>
  <div class="relative w-full mb-3">
    <label
      v-if="label"
      :for="id"
      class="block uppercase text-slate-100 text-xs font-bold mb-2"
    >
      {{ label }}
    </label>

    <input
      :id="id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      :required="required"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600
             bg-white rounded text-sm shadow focus:outline-none focus:ring
             w-full ease-linear transition-all duration-150
             disabled:bg-gray-100 disabled:cursor-not-allowed"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ""
  },
  label: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  name: {
    type: String,
    default: ""
  },
  id: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: ""
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

defineEmits(["update:modelValue"]);
</script>
