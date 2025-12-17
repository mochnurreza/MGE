<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
    <div class="rounded bg-white mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-lg mb-6">
            {{ title }}
          </h3>
          <form action="#">
            <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <BaseInput v-model="form.name" label="Category Name" placeholder="Category name" />
            </div>
            <div class="flex items-center space-x-4">
              <Buttons variant="red" @click.prevent="cancel"> Cancel </Buttons>

              <Buttons @click="handleSubmit">
                {{ mode === 'edit' ? 'Update' : 'Save' }}
              </Buttons>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCategoriesStore } from "@/stores/categories.store";
import BaseInput from "@/components/form/Form.vue";
import Buttons from "@/components/buttons/Buttons.vue";

const route = useRoute();
console.log(route.params)
const router = useRouter();
const categoryStore = useCategoriesStore();

const isEdit = computed(() => !!route.params.slug);

const form = reactive({
  name: "",
});

const title = computed(() =>
  isEdit.value ? "Edit Category" : "Add Category"
);

onMounted(async () => {
  if (isEdit.value) {
    const category = categoryStore.categories.find(
      (c) => c.slug === route.params.slug
    );

    if (category) {
      form.name = category.name;

    } else {
      await categoryStore.getCategories();
      const found = categoryStore.categories.find(
        (c) => c.slug === route.params.slug
      );
      if (found) form.name = found.name;
    }
  }
});

const handleSubmit = async () => {
  if (isEdit.value) {
    await categoryStore.updateCategory(route.params.slug, form);
  } else {
    await categoryStore.addCategory(form);
  }
  router.push("/dashboard/categories");
};

const cancel = () => {
  router.push("/dashboard/categories");
};
</script>
