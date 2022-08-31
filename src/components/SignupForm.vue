<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div>
      <label class="block text-sm font-medium text-gray-700"
        >Display Name</label
      >
      <div class="mt-1">
        <input
          v-model="displayName"
          type="text"
          required
          class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700"
        >Email address</label
      >
      <div class="mt-1">
        <input
          v-model="email"
          type="email"
          required
          class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Password</label>
      <div class="mt-1">
        <input
          v-model="password"
          type="password"
          required
          class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>

    <div v-if="error" class="error">{{ error }}</div>

    <div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Sign up
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useSignup from "../composables/useSignup";

import { useRouter } from "vue-router";
const router = useRouter();

const { error, signup } = useSignup();

// refs
const displayName = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");

const handleSubmit = async () => {
  // console.log(displayName.value, email.value, password.value);
  await signup(email.value, password.value, displayName.value).then(() => {
    router.push({ name: "Chatroom" });
  });
  if (!error.value) {
    // console.log("user signed up");
  }
};
</script>
