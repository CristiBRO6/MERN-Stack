import PageMeta from '../../components/PageMeta';
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/Card';
import Input from '../../components/ui/Input';

const Login = () => {
  return (
    <>
      <PageMeta title={"Login"} description={"Login"} />

      <div className="grid place-items-center w-full h-full">
        <Card width={500}>
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardBody>
             <Input type="Email" autoComplete="email" placeholder="Email" />
          </CardBody>
        </Card>
      </div>
    </>
  )
}
    
export default Login;
    