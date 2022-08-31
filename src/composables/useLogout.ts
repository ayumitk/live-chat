import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { ref } from "vue";

const error = ref<string | null>(null);

const logout = async () => {
  error.value = null;

  try {
    const res = await signOut(auth);
    error.value = null;

    // console.log(res.user);

    return res;
  } catch (err: any) {
    error.value = err.message;
  }
};

const useLogout = () => {
  return { logout, error };
};

export default useLogout;
