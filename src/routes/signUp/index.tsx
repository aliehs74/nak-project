import { createFileRoute, redirect } from "@tanstack/react-router";
import { useAuthStore } from "../../store/authStore";

export const Route = createFileRoute("/signUp/")({
  component: SignUp,
  beforeLoad: async () => {
    const { isAuthenticated } = useAuthStore.getState();

    if (isAuthenticated) {
      throw redirect({
        to: '/',
        replace: true
      });
    }
  },
});

function SignUp() {

  return <div >Hello from SignUp!</div>;
}
