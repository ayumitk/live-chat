<template>
  <nav class="bg-white shadow w-full">
    <div class="max-w-3xl mx-auto flex items-center py-4">
      <div class="flex">
        <img
          class="h-8 w-auto mr-1 items-center"
          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
          alt="Workflow"
        />
        <span class="font-bold text-2xl text-gray-900">Chatroom</span>
      </div>
      <div class="ml-auto mr-2">
        <p class="font-bold text-gray-900">{{ user && user.displayName }}</p>
        <p class="text-xs text-gray-500">{{ user && user.email }}</p>
      </div>
      <button
        @click="handleClick"
        class="border border-gray-400 rounded-lg block py-1 px-4 text-sm hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  </nav>
  <p>{{ error }}</p>
</template>

<script setup lang="ts">
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

import { useRouter } from "vue-router";
const router = useRouter();

const { logout, error } = useLogout();
const { user } = getUser();

const handleClick = async () => {
  // console.log("click");
  await logout().then(() => {
    router.push({ name: "Welcome" });
  });
  if (!error.value) {
    // console.log("user logged out");
  }
};
</script>
