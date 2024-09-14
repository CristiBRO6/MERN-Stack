import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Input from './ui/Input';
import Button from './ui/Button';

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  password: z.string().min(1, 'Password is required').regex(
    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*_-])[a-zA-Z0-9!@#$%^&*_-]{8,}$/,
    'The password must have at least 8 characters, an uppercase letter, a lowercase letter, a number and a symbol'
  )
});

const LoginForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    const { email, password } = data;

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    console.log({ email, password });
  };

  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium">Email</span>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                type="email"
                autoComplete="email"
                placeholder="Email"
                disabled={isLoading}
                {...field}
              />
            )}
          />
          {errors.email && <span className="text-sm font-medium text-error">{errors.email.message}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium">Password</span>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                type="password"
                autoComplete="password"
                placeholder="Password"
                disabled={isLoading}
                {...field}
              />
            )}
          />
          {errors.password && <span className="text-sm font-medium text-error">{errors.password.message}</span>}
        </div>

        <Button loadingColor="white" className="justify-center" loading={isLoading}>Login</Button>

        {errors.root && <span className="text-sm font-medium text-error">{errors.root.message}</span>}
      </form>
    </>
  );
};

export default LoginForm;
