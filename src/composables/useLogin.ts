import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { ref } from "vue";

const error = ref<string | null>(null);

const login = async (email: string, password: string) => {
  error.value = null;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    error.value = null;

    // console.log(res.user);

    return res;
  } catch (err) {
    error.value = "Incorrect login credentials";
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
