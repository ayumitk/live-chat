<template>
  <form>
    <textarea
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
      placeholder="Type a message and hit enter to send..."
      class="block w-full appearance-none rounded-2xl border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
    ></textarea>
    <p v-if="error" class="text-red-500 mt-1">{{ error }}</p>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
import { serverTimestamp } from "firebase/firestore";

// types
import { Doc } from "../types";

const { user } = getUser();
const { addDocFnc, error } = useCollection("message");

const message = ref<string>("");

const handleSubmit = async () => {
  const chat: Doc = {
    message: message.value,
    name: user.value !== null ? user.value.displayName : "Anonymous",
    createdAt: serverTimestamp(),
  };

  // console.log(chat);
  await addDocFnc(chat);
  if (!error.value) {
    message.value = "";
  }
};
</script>
