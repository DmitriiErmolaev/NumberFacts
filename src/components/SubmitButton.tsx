import { Button } from 'antd';

const SubmitButton = ({
  disabled,
  onSubmit,
}:{
  disabled: boolean;
  onSubmit: () => void;
}) => {
  return (
    <Button
      size='large'
      type='primary'
      style={{width: '30%'}}
      disabled={disabled}
      htmlType='submit'
      onClick={onSubmit}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;