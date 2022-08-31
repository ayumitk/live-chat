<template>
  <div>
    <p v-if="error" class="text-red-500 mb-2">{{ error }}</p>

    <div
      ref="messages"
      class="max-h-[400px] overflow-y-scroll border rounded-2xl bg-white border-gray-300 mb-2 p-4"
    >
      <template v-if="formattedDocuments">
        <div v-for="doc in formattedDocuments" :key="doc.id">
          <p class="p-2">
            <span class="text-gray-900 font-bold">{{ doc.name }} </span>
            {{ doc.message }}
            <span class="text-xs text-gray-500">({{ doc.createdAt }})</span>
          </p>
        </div>
      </template>
      <p v-else class="text-gray-500 text-center p-20">Loading...</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import getCollection from "../composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "vue";

import { Doc } from "../types";

const { documents, error } = getCollection("message");

const formattedDocuments = computed(() => {
  if (documents.value) {
    return documents.value.map((doc: Doc) => {
      let time = formatDistanceToNow(doc.createdAt.toDate());
      return { ...doc, createdAt: time }; // overwrite createdAt proxy
    });
  }
});

// auto-scroll to bottom of messages
const messages = ref(null);
onUpdated(() => {
  // console.log(messages.value.scrollTop, messages.value.scrollHeight);
  if (messages.value !== null) {
    messages.value.scrollTop = messages.value.scrollHeight;
  }
});
</script>
