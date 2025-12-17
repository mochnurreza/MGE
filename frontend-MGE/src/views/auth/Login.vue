<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center  items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col bg-slate-500 min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-slate-100 text-sm font-bold">
                Sign in with
              </h6>
            </div>
            <hr class="mt-6 border-b-1 text-white border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form @submit.prevent="handleLogin">
              <Form v-model="email"
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required />

              <Form v-model="password"
                    label="Password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required />
              <!-- <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-blueGray-600">
                    Remember me
                  </span>
                </label>
              </div> -->

              <div class="text-center mt-6">
                <Buttons type="submit" :loading="authStore.loading">Sign In</Buttons>
                <p v-if="authStore.error" class="text-red-500 text-sm mt-2">
                  {{ authStore.error }}
                </p>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <!-- <div class="w-1/2">
            <a href="javascript:void(0)" class="text-blueGray-200">
              <small>Forgot password?</small>
            </a>
          </div> -->
          <div class="w-1/2 text-left">
            <router-link to="/auth/register" class="text-green-500 font-medium">
              <small>Create new account</small>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

import { ref } from 'vue';
import Form from '@/components/form/Form.vue';
import Buttons from '@/components/buttons/Buttons.vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store.js';

const authStore = useAuthStore();
const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = async () => {
  console.log('Logging in with', email.value, password.value);
  await authStore.loginUser({ email: email.value, password: password.value });
  router.push('/dashboard/products');
};

</script>
