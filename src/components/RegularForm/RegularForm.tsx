import FormContainer from '../FormContainer/FormContainer';
import { Form, type FormInstance, type FormProps } from 'antd';
import NumberTypeSelect from '../NumberTypeSelect';
import NumberInput from '../NumberInput';
import { rules } from '../../validation';
import type { RegularFormFields } from '../../types';

const RegularForm = ({
  form,
  onFinish,
  onFormClick,
  formDisabled,
}:{
  form: FormInstance;
  onFinish: FormProps<RegularFormFields>['onFinish'];
  onFormClick: () => void;
  formDisabled: boolean;
}) => {
  return (
    <FormContainer
      disabled={formDisabled}
      onClick={onFormClick}
    >
      <Form
        onFinish={onFinish}
        layout='vertical'
        form={form}
        disabled={formDisabled}
      >
        <NumberTypeSelect rules={rules.regular.type}/>
        <NumberInput rules={rules.regular.number}/>
      </Form>
    </FormContainer>
  );
};

export default RegularForm;