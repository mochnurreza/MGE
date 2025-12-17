<template>
  <div class="w-full mb-4">
    <label v-if="label" class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
      {{ label }}
    </label>

    <select
      :value="modelValue"
      @change="onChange"
      class="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
    >
      <!-- Placeholder -->
      <option value="" disabled>
        {{ placeholder }}
      </option>

      <!-- Options -->
      <option v-for="option in options" :key="option[valueKey]" :value="option[valueKey]">
        {{ option[labelKey] }}
      </option>
    </select>

    <!-- Error -->
    <p v-if="error" class="text-red-500 text-xs mt-1">
      {{ error }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  options: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Select option',
  },
  labelKey: {
    type: String,
    default: 'name',
  },
  valueKey: {
    type: String,
    default: 'id',
  },
  error: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const onChange = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>
