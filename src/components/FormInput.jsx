import { Form } from 'semantic-ui-react';
import { formLabels } from '../data/data';
import './forminput.css';
const FormInput = () => {
  return (
    <div>
      {formLabels.map((formlabel) => {
        const { id, labelname, placeholder } = formlabel;
        return (
          <Form.Field key={id}>
            <label id="label-text">{labelname}</label>
            <input id="input-text" placeholder={placeholder} />
            <div></div>
          </Form.Field>
        );
      })}
    </div>
  );
};
export default FormInput;
