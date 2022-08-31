import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config";
import { ref, watchEffect } from "vue";

const getCollection = (collectionName: string) => {
  const documents = ref(null);
  const error = ref<string | null>(null);

  const q = query(collection(db, collectionName), orderBy("createdAt"));
  const unsubscribe = onSnapshot(
    q,
    (querySnapshot) => {
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push(doc.data());
      });
      documents.value = result;
    },
    (err) => {
      error.value = err.message;
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscribe());
  });

  return { documents, error };
};

export default getCollection;
