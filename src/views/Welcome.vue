<template>
  <div class="h-screen">
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
          alt="Workflow"
        />
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          <span v-if="showLogin">Sign in to your account</span>
          <span v-else>Create a new account</span>
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <template v-if="showLogin">
            <LoginForm @login="enterChat" />
          </template>
          <template v-else>
            <SignupForm @signup="enterChat" />
          </template>
        </div>
      </div>

      <div
        class="sm:mx-auto sm:w-full sm:max-w-md text-center text-gray-500 mt-8"
      >
        <p v-if="showLogin">
          No account yet?
          <span
            @click="showLogin = false"
            class="text-indigo-600 cursor-pointer"
            >Signup</span
          >
          instead
        </p>
        <p v-else>
          Already registered?
          <span @click="showLogin = true" class="text-indigo-600 cursor-pointer"
            >Login</span
          >
          instead
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const showLogin = ref(true);
const router = useRouter();

const enterChat = () => {
  router.push({ name: "Chatroom" });
};
</script>
