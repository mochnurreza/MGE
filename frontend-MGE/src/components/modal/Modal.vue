<script setup>
import { reactive, watch, computed } from "vue";
import BaseInput from "@/components/form/Form.vue";
import Buttons from "@/components/buttons/Buttons.vue";

const props = defineProps({
  show: Boolean,
  mode: {
    type: String,
    default: "add",
  },
  initialData: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["close", "submit"]);

const form = reactive({
  name: "",
  price: "",
  description: "",
  image: ""
});


watch(
  () => props.initialData,
  (val) => {
    if (props.mode === "edit" && val) {
      form.name = val.name || "";
      form.price = val.price || "";
      form.description = val.description || "";
      form.image = val.image || ""
    }
  },
  { immediate: true }
);

const title = computed(() =>
  props.mode === "edit" ? "Edit Product" : "Add Product"
);

const handleSubmit = () => {
  emit("submit", { ...form });
};
</script>

<template>
  <div v-if="show" class="max-w-lg z-50 flex items-center justify-center">
    <!-- overlay -->
    <div
      class="relative inset-0 z-30 bg-black/50"
      @click="emit('close')"
    ></div>

    <!-- modal -->
    <div
      class="relative bg-white rounded-lg shadow-lg w-full max-w-96 p-6 z-10"
    >
      <h2 class="text-lg font-bold mb-4">{{ title }}</h2>

      <BaseInput
        v-model="form.name"
        label="Product Name"
        placeholder="Product name"
      />

      <BaseInput
        v-model="form.price"
        label="Price"
        type="number"
        placeholder="Price"
      />

      <BaseInput
        v-model="form.description"
        label="Description"
        placeholder="Description"
      />

      <div class="flex justify-end gap-2 mt-6">
        <Buttons
          variant="red"
          @click="emit('close')"
        >
          Cancel
        </Buttons>

        <Buttons @click="handleSubmit">
          {{ mode === "edit" ? "Update" : "Save" }}
        </Buttons>
      </div>
    </div>
  </div>
</template>
