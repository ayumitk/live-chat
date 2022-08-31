import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { ref } from "vue";

import { Doc } from "../types";

const useCollection = (collectionName: string) => {
  const error = ref<string | null>(null);

  const addDocFnc = async (docData: Doc) => {
    error.value = null;

    try {
      const colRef = collection(db, collectionName);
      await addDoc(colRef, docData);
    } catch (err: any) {
      console.log(err.message);
      error.value = "could not send the message";
    }
  };

  return { error, addDocFnc };
};

export default useCollection;
