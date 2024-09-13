import { Link } from 'react-router-dom';

import PageMeta from '../../components/PageMeta';

import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/Card';
import RegisterForm from '../../components/RegisterForm';

const Register = () => {
  return (
    <>
      <PageMeta title={"Register"} description={"Login"} />

      <div className="grid place-items-center w-full h-full">
        <Card width={500}>
          <CardHeader>
            <CardTitle>Register</CardTitle>
          </CardHeader>
          <CardBody className="flex flex-col gap-2">
            <RegisterForm />
            <div className="w-full flex justify-start">
              <Link to="/login">Login</Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  )
}
    
export default Register;
    