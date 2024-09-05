import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';

const Login = () => {
  return (
    <>
      <div className="grid place-items-center w-full h-full">
        <Card width={500}>
          <Card.Header>
            <Card.Title>Login</Card.Title>
          </Card.Header>
          <Card.Body>
             <Input type="Email" autoComplete="email" placeholder="Email" />
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
    
export default Login;
    