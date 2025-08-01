import { Form, Input } from 'antd';
import type { Rule } from 'antd/es/form';

const NumberInput = ({
  rules,
}:{
  rules: Rule[]
}) => {
  return (
    <Form.Item
      name='number'
      rules={rules}
      label='Number'
      validateTrigger={['onBlur', 'onChange', 'onSubmit']}
    >
      <Input />
    </Form.Item>
  );
};

export default NumberInput;