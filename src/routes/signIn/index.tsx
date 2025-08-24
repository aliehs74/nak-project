import { createFileRoute, redirect } from '@tanstack/react-router'
import { css } from '@emotion/css'
import SignInForm from '../../components/SignInForm'
import { useAuthStore } from '../../store/authStore';

export const Route = createFileRoute('/signIn/')({
  component: SignIn,
  beforeLoad: async () => {
    const { isAuthenticated } = useAuthStore.getState();

    if (isAuthenticated) {
      throw redirect({
        to: '/',
        replace: true
      });
    }
  },
})

export default function SignIn() {

  return (
    <div className={css(SignInContainerStyle)}>
      <SignInForm />
    </div>
  )
}

const SignInContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
}