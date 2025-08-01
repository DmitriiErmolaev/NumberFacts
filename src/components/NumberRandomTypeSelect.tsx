import { Form, Select } from "antd";
import type { Rule } from "antd/es/form";

const randomOptions = [
  {
    value: 'trivia',
    label: 'random/trivia',
  },
  {
    value: 'year',
    label: 'random/year',
  },
  {
    value: 'date',
    label: 'random/date',
  },
  {
    value: 'math',
    label: 'random/math',
  },
]

const NumberRandomTypeSelect = ({
  rules,
}:{
  rules: Rule[]
}) => {
  return (
    <Form.Item
      name='type'
      label='Random type'
      validateTrigger={['onBlur', 'onChange', 'onSubmit']}
      rules={rules}
    >
      <Select
        options={randomOptions}
        style={{width:'200px'}}
      />
    </Form.Item>
  );
};

export default NumberRandomTypeSelect;