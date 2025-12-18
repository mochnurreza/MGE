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
import { ref, computed, onUnmounted } from "vue";

const props = defineProps({
  modelValue: {
    type: [File, String, null],
    default: null,
  },
  label: String,
  placeholder: {
    type: String,
    default: "Upload file",
  },
  accept: {
    type: String,
    default: "image/*",
  },
});

const emit = defineEmits(["update:modelValue"]);

const fileInput = ref(null);
const preview = ref(null);

const trigger = () => {
  fileInput.value?.click();
};

const cleanupPreview = () => {
  if (preview.value?.startsWith("blob:")) {
    URL.revokeObjectURL(preview.value);
  }
};

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  cleanupPreview();
  preview.value = URL.createObjectURL(file);

  emit("update:modelValue", file);
  e.target.value = "";
};

const isImage = computed(() => !!preview.value);

onUnmounted(cleanupPreview);
</script>

