export interface SignInCredentials {
  userName: string
  password: string
}

export interface AuthResponse {
  access_token: string
}

export interface AuthState {
  isAuthenticated: boolean
  token: string | null
  signIn: (token: string) => void
  logout: () => void
}

export interface SignInCredentials {
  userName: string;
  password: string;
}

export interface SignInResponse {
  access_token: string;
}