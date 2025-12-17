import { defineStore } from 'pinia'
import { baseURL } from '../api/interceptor.js'
import { notifySuccess, notifyError } from "../utils/notify.js"
import { confirmDelete } from "../utils/confirmation.js";

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),

  actions: {
    async getProducts() {
      this.loading = true
      this.error = null
      try {
        const response = await baseURL.get('/products')
        if (response.success === true) {
          this.products = response.data
        }
      } catch (error) {
        this.error = error.message || error.message
      } finally {
        this.loading = false
      }
    },

    async createProduct(payload) {
      this.loading = true
      this.error = null

      try {
        const formData = new FormData()

        formData.append('name', payload.name)
        formData.append('price', payload.price)
        formData.append('categoryId', payload.categoryId)
        formData.append('description', payload.description)

        if (payload.image instanceof File) {
          formData.append('image', payload.image)
        }

        const response = await baseURL.post('/products/add', formData)

        if (response.success) {
          this.products.unshift(response.data)
        }
        notifySuccess('Product created succesfully')
      } catch (error) {
        notifyError(error.message)
        throw error
      } finally {
        this.loading = false
      }
    },

    async updateProducts(slug, payload) {
      this.loading = true
      this.error = null

      try {
        const formData = new FormData()

        formData.append('name', payload.name)
        formData.append('price', payload.price)
        formData.append('description', payload.description)
        formData.append('categoryId', payload.categoryId)

        if (payload.image instanceof File) {
          formData.append('image', payload.image)
        }

        const response = await baseURL.put(`/products/${slug}`, formData)

        if (response.success) {
          const index = this.products.findIndex((p) => p.slug === slug)

          if (index !== -1) {
            this.products[index] = response.data
          }
        }

        notifySuccess('Product updated succesfully')
        return response.data
      } catch (error) {
        notifyError(error.message)
        throw error
      } finally {
        this.loading = false
      }
    },

    async deleteProduct(slug) {
     const confirmed = await confirmDelete();
     if (!confirmed) return;

      try {
        await baseURL.delete(`/products/${slug}`)

        this.products = this.products.filter((p) => p.slug !== slug)
        notifySuccess('Data deleted')
      } catch (error) {
        notifyError(error.message)
        throw error
      } finally {
        this.loading = false
      }
    },
  },
})
