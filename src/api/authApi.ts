import { useMutation } from '@tanstack/react-query';
import type { SignInCredentials, SignInResponse } from '../types/auth';
import api from './api';

const signInUser = async (credentials: SignInCredentials): Promise<SignInResponse> => {
  const response = await api.post<SignInResponse>('/auth/login', credentials);
  return response.data;
};

export const useSignInMutation = () => {
  return useMutation<SignInResponse, Error, SignInCredentials>({
    mutationFn: signInUser,
  });
};