<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
      >
        <div class="rounded-t mb-0 px-4 py-3 border-0 bg-yellow-50">
          <div class="flex flex-wrap items-center justify-between">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                class="font-semibold text-lg text-blueGray-500"

              >
                Kategori
              </h3>
            </div>
            <div class="max-w-full"></div>
            <div class="relative w-full px-4 max-w-full flex justify-end flex-1 text-right">
              <button
                class="bg-mallard-900 text-yellow-50 font-nunito active:bg-mallard-900 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click.prevent="openModal"
              >
                add data
              </button>
            </div>
          </div>
        </div>
        <div class="block w-full overflow-x-auto max-h-760-px">

          <table class="items-center w-full bg-mallard-900 border-collapse">
            <thead>
              <tr>
                <th
                  class="px-6 align-middle font-nunito border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  :class="[
                    color === 'light'
                      ? 'bg-serria-400 text-mallard-900 border-blueGray-100'
                      : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                  ]"
                >
                  Name
                </th>
                <th
                  class="px-6 align-middle border font-nunito border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  :class="[
                    color === 'light'
                      ? 'bg-serria-400 text-mallard-900 border-blueGray-100'
                      : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                  ]"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody >
              <tr v-if="!categoriesStore.categories || categoriesStore.categories.length === 0">
                <td
                  colspan="5"
                  class="text-center py-6 text-sm font-nunito text-yellow-100"
                >
                  NO DATA
                </td>
              </tr>
              <tr v-for="category in categoriesStore.categories" :key="category.id" v-else>
                <th
                  class="border-t-0 px-6 align-middle tracking-wide font-nunito border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                >

                  <span
                    class="ml-3 font-bold"
                    :class="[color === 'light' ? 'text-yellow-50' : 'text-white']"
                  >
                    {{category.name}}
                  </span>
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
                >
                  <div class="flex">
                    <button class="text-serria-400 py-1 px-3" @click="goEdit(category.slug)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </button>
                    <button class="text-red-500 py-1 px-3" @click="handleDelete(category.slug)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCategoriesStore } from '@/stores/categories.store'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const categoriesStore = useCategoriesStore()
const selectedCategory = ref(null)
const mode = ref('add')
const router = useRouter()

onMounted(() => {
  categoriesStore.getCategories()
})

const openModal = () => {
  mode.value = 'add'
  selectedCategory.value = null
  router.push('/dashboard/category')
}

const goEdit = (slug) => {
  mode.value = "edit"
  selectedCategory.value = slug
  router.push(`/dashboard/category/${slug}`)
}

const handleDelete = async (slug) => {
  await categoriesStore.deleteCategory(slug)
}
</script>
