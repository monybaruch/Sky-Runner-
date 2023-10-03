import { Button, Checkbox, Form } from 'semantic-ui-react';
import FormInput from './FormInput';
import './loginform.css';
const LoginForm = () => {
  return (
    <main className="container">
      <h2>fill up the form to login:</h2>
      <Form className="form">
        <FormInput />
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </main>
  );
};
export default LoginForm;
