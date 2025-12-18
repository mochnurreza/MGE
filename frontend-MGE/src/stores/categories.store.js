import { defineStore } from 'pinia'
import { baseURL } from '../api/interceptor.js'
import { notifySuccess, notifyError } from "../utils/notify.js"
import { confirmDelete } from "../utils/confirmation.js";

export const useCategoriesStore = defineStore('category', {
  state: () => ({
    categories: [],
    loading: false,
    error: null,
  }),

  actions: {
    async getCategories() {
      this.loading = true
      this.error = null
      try {
        const response = await baseURL.get('/categories')
        if (response.success === true) {
          this.categories = response.data
        }
      } catch (error) {
        this.error = error.message || error.message
      } finally {
        this.loading = false
      }
    },

    async addCategory(data) {
      this.loading = true
      this.error = null
      try {
        const response = await baseURL.post('/categories', data)
        if (response.success) {
          this.categories = response.data
        }
        notifySuccess("Category created succesfully")
      } catch (error) {
        notifyError(error.message)
        throw error
      } finally {
        this.loading = false
      }
    },

    async updateCategory(slug, payload) {
      this.loading = true
      this.error = null

      try {
        const response = await baseURL.put(`/categories/${slug}`, payload)

        if (response.success) {
          const index = this.categories.findIndex((c) => c.slug === slug)
          if (index !== -1) {
            this.categories[index] = response.data
          }
        }
        notifySuccess("Category updated succesfully")
      } catch (error) {
        notifyError(error.message)
        throw error
      } finally {
        this.loading = false
      }
    },

    async deleteCategory(slug) {
      const confirmed = await confirmDelete();
      if (!confirmed) return;
      try {
        const response = await baseURL.delete(`/categories/${slug}`)
        if (response.success) {
          this.categories = this.categories.filter((c) => c.slug !== slug)
        }
         notifySuccess('Data deleted')
      } catch (error) {
         notifySuccess(error.message)
        throw error
      } finally {
        this.loading = false
      }
    },
  },
})
