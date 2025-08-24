// src/routes/_authenticated.tsx
import { createFileRoute, redirect } from '@tanstack/react-router';
import { useAuthStore } from '../store/authStore';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ location }) => {
    const { isAuthenticated } = useAuthStore.getState();

    if (!isAuthenticated) {
      throw redirect({
        to: '/signIn',
        replace: true,

        search: {
          redirect: location.href,
          replace: true

        },
      });
    }
  },
});