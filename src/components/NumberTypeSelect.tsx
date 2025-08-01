import { Form, Select } from 'antd';
import type { Rule } from 'antd/es/form';

const typeOptions = [
  {
    value: 'math',
    label: 'Math',
  },
  {
    value: 'date',
    label: 'Date',
  },
  {
    value: 'trivia',
    label: 'Trivia',
  },
]

const NumberTypeSelect = ({
  rules,
}:{
  rules: Rule[]
}) => {
  return (
    <Form.Item
      name='type'
      label='Type'
      rules={rules}
      validateTrigger={['onBlur', 'onChange', 'onSubmit']}
    >
      <Select
        options={typeOptions}
        style={{width:'120px'}}
      />
    </Form.Item>
  );
};

export default NumberTypeSelect;