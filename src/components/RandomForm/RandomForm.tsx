import { Form, type FormInstance, type FormProps } from "antd";
import FormContainer from "../FormContainer/FormContainer";
import NumberRandomTypeSelect from "../NumberRandomTypeSelect";
import { rules } from "../../validation";
import type { RegularFormFields } from "../../types";

const RandomForm = ({
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
        <NumberRandomTypeSelect rules={rules.random.type}/>
      </Form>
    </FormContainer>
  );
};

export default RandomForm;