/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from '../utils/validation';
import type { SignInFormData } from '../utils/validation';
import { useNavigate } from '@tanstack/react-router';
import { useSignInMutation } from '../api/authApi';
import { useAuthStore } from '../store/authStore';
import type { SignInResponse } from '../types/auth';

const formStyles = css`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
`;

const inputStyles = css`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const buttonStyles = css`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const errorStyles = css`
  color: #dc3545;
  margin-bottom: 10px;
  font-size: 14px;
`;

const SignInForm: React.FC = () => {
    const { setToken } = useAuthStore();
    const navigate = useNavigate();
    const { mutate: signIn, isPending, error } = useSignInMutation();

    const { register, handleSubmit, formState: { errors }, } = useForm<SignInFormData>({ resolver: zodResolver(signInSchema) });

    const onSubmit = (data: SignInFormData) => {
        signIn(data, {
            onSuccess: (response: SignInResponse) => {
                setToken(response.access_token);
                navigate({ to: '/' });
            },
        });
    };

    return (
        <form css={formStyles} onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign In</h2>

            {error && <div css={errorStyles}>{error.message}</div>}

            <div>
                <input
                    css={inputStyles}
                    placeholder="Username"
                    {...register('userName')}
                />
                {errors.userName && <div css={errorStyles}>{errors.userName.message}</div>}
            </div>

            <div>
                <input
                    css={inputStyles}
                    type="password"
                    placeholder="Password"
                    {...register('password')}
                />
                {errors.password && <div css={errorStyles}>{errors.password.message}</div>}
            </div>

            <button css={buttonStyles} type="submit" disabled={isPending}>
                {isPending ? 'Loading...' : 'Sign In'}
            </button>

            <div css={css`margin-top: 15px; text-align: center;`}>
                <a href="#" css={css`color: #007bff; text-decoration: none;`}>
                    Sign Up
                </a>
            </div>
        </form>
    );
};

export default SignInForm;