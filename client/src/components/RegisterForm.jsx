import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Input from './ui/Input';
import Button from './ui/Button';

const registerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  password: z.string().min(1, 'Password is required').regex(
    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*_-])[a-zA-Z0-9!@#$%^&*_-]{8,}$/,
    'The password must have at least 8 characters, an uppercase letter, a lowercase letter, a number and a symbol'
  ),
  confirmPassword: z.string().min(1, 'Confirm Password is required'),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

const RegisterForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema)
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    const { name, email, password, confirmPassword } = data;

    console.log({ name, email, password, confirmPassword })

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium">Name</span>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                type="text"
                autoComplete="name"
                placeholder="Name"
                disabled={isLoading}
                {...field}
              />
            )}
          />
          {errors.name && <span className="text-sm font-medium text-error">{errors.name.message}</span>}
        </div>

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
        
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium">Confirm Password</span>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                type="password"
                autoComplete="password"
                placeholder="Confirm Password"
                disabled={isLoading}
                {...field}
              />
            )}
          />
          {errors.confirmPassword && <span className="text-sm font-medium text-error">{errors.confirmPassword.message}</span>}
        </div>

        <Button loadingColor="white" className="justify-center" loading={isLoading}>Register</Button>

        {errors.root && <span className="text-sm font-medium text-error">{errors.root.message}</span>}
      </form>
    </>
  );
};

export default RegisterForm;
