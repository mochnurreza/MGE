<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
    <div class="rounded bg-blueGray-100 mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-lg mb-6">
            {{ title }}
          </h3>
          <form @submit.prevent="handleSubmit">
            <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <BaseInput v-model="form.name" label="Product Name" placeholder="Product name" />
              <BaseInput v-model="form.price" label="Price" type="number" placeholder="Price" />
              <SelectInput
                v-model="form.categoryId"
                label="Category"
                placeholder="Select category"
                :options="categoriesStore.categories"
                label-key="name"
                value-key="id"
              />
              <BaseInput v-model="form.description" label="Description" placeholder="Description" />
            </div>
            <div class="flex items-center space-x-4">
              <Buttons variant="red" @click.prevent="cancel"> Cancel </Buttons>

              <Buttons type="submit">
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
import { reactive, watch, computed, onMounted } from 'vue'
import BaseInput from '@/components/form/Form.vue'
import SelectInput from '@/components/form/Select.vue'
import Buttons from '@/components/buttons/Buttons.vue'
import { useRouter, useRoute } from 'vue-router'
import { useCategoriesStore } from '@/stores/categories.store.js'
import Upload from '@/components/form/Upload.vue'
import { useProductStore } from '@/stores/products.store'

const props = defineProps({
  show: Boolean,
  mode: {
    type: String,
    default: 'add',
  },
  initialData: {
    type: Object,
    default: () => ({}),
  },
})

const productStore = useProductStore()
const categoriesStore = useCategoriesStore()
const router = useRouter()

const emit = defineEmits(['submit'])
const isEdit = computed(() => !!route.params.slug);
const route = useRoute()

const form = reactive({
  name: '',
  price: '',
  categoryId: '',
  description: '',
  image: null,
})

onMounted(async() => {
  if (!categoriesStore.categories.length) {
    categoriesStore.getCategories()
  }
   if (isEdit.value) {
   const product = productStore.products.find(
      (p) => p.slug === route.params.slug
    );

    form.name = product.name ?? ""
    form.price = product.price ?? ""
    form.description = product.description ?? ""
    form.categoryId = product.category
      ? product.category.id
      : ""
  }

})

const title = computed(() => (isEdit.value ? 'Edit Product' : 'Add Product'))

const handleSubmit = async () => {
  if (isEdit.value) {
    await productStore.updateProducts(route.params.slug, form);
  } else {
    await productStore.createProduct(form);
  }
  router.push("/dashboard/products");
}

const cancel = () => {
  router.push('/dashboard/products')
}
</script>
