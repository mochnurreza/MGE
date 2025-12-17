<template>
  <div class="w-full mb-4">
    <!-- Label -->
    <label
      v-if="label"
      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
    >
      {{ label }}
    </label>

    <!-- Upload box -->
    <div
      class="flex items-center justify-center w-full border-2 border-dashed
             border-blueGray-300 rounded-lg p-4 cursor-pointer
             hover:border-blueGray-500 transition"
      @click="trigger"
    >
      <input
        ref="fileInput"
        type="file"
        class="hidden"
        :accept="accept"
        @change="onFileChange"
      />

      <div class="text-center">
        <p class="text-sm text-blueGray-500">
          {{ fileName || placeholder }}
        </p>
        <p class="text-xs text-blueGray-400">
          Click to upload
        </p>
      </div>
    </div>

    <!-- Preview -->
    <div v-if="preview" class="mt-3">
      <img
        v-if="isImage"
        :src="preview"
        class="h-32 rounded object-cover"
      />
    </div>

    <!-- Error -->
    <p v-if="error" class="text-red-500 text-xs mt-1">
      {{ error }}
    </p>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: [File, String, null],
    default: null,
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "Upload file",
  },
  accept: {
    type: String,
    default: "image/*",
  },
  error: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const fileInput = ref(null);
const preview = ref(null);

const trigger = () => {
  fileInput.value.click();
};

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  emit("update:modelValue", file);
};

const isImage = computed(() =>
  props.modelValue?.type?.startsWith("image")
);

const fileName = computed(() => {
  if (props.modelValue instanceof File) {
    return props.modelValue.name;
  }
  if (typeof props.modelValue === "string") {
    return props.modelValue.split("/").pop();
  }
  return "";
});

// preview for image
watch(
  () => props.modelValue,
  (val) => {
    if (val instanceof File && val.type.startsWith("image")) {
      preview.value = URL.createObjectURL(val);
    } else if (typeof val === "string") {
      preview.value = val;
    } else {
      preview.value = null;
    }
  },
  { immediate: true }
);
</script>
