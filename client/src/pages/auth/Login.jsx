import { Link } from 'react-router-dom';

import PageMeta from '../../components/PageMeta';

import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/Card';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  return (
    <>
      <PageMeta title={"Login"} description={"Login"} />

      <div className="grid place-items-center w-full h-full">
        <Card width={500}>
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardBody className="flex flex-col gap-2">
            <LoginForm />
            <div className="w-full flex justify-between">
              <Link className="text-sm font-medium" to="/register">Register</Link>
              <Link className="text-sm font-medium" to="/forgot-password">Forgot password?</Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  )
}
    
export default Login;
    