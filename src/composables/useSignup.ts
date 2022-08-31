import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { ref } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

const error = ref(null);

const signup = async (email: string, password: string, displayName: string) => {
  error.value = null;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not complete the signup");
    }
    await updateProfile(res.user, { displayName });

    error.value = null;

    // console.log(res);

    return res;
  } catch (err: any) {
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
