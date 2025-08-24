import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    setToken: (token: string) => void;
    clearToken: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            isAuthenticated: false,
            setToken: (token: string) => set({ token, isAuthenticated: true }),
            clearToken: () => set({ token: null, isAuthenticated: false }),
        }),
        {
            name: 'auth-storage',
            storage: {
                getItem: (name) => {
                    const item = sessionStorage.getItem(name);
                    return item ? JSON.parse(item) : null;
                },
                setItem: (name, value) => {
                    sessionStorage.setItem(name, JSON.stringify(value));
                },
                removeItem: (name) => sessionStorage.removeItem(name),
            },
        }
    )
);