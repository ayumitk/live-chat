<template>
  <Navbar />
  <div class="max-w-3xl mx-auto py-6">
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script lang="ts" setup>
import ChatWindow from "../components/ChatWindow.vue";
import NewChatForm from "../components/NewChatForm.vue";
import Navbar from "../components/Navbar.vue";
import getUser from "../composables/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";

const { user } = getUser();
const router = useRouter();

// console.log(user);

watch(user, () => {
  if (!user.value) {
    router.push({ name: "Welcome" });
  }
});
</script>
