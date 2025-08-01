import { Flex, Form,  type FormProps } from 'antd';
import {  useState } from 'react';
import type { FormName, RandomFormFields, RegularFormFields } from '../types';
import { useNavigate } from 'react-router';
import { FormSelector, RandomForm, RegularForm, SubmitButton } from '../components';
import styles from './MainPage.module.scss';
import { RANDOM } from '../constants';

function MainPage() {
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const [formName, setFormName] = useState<FormName>('regular');
  const [formDisabled, setFormDisabled] = useState<FormName>('random');
  const navigate = useNavigate();

  const handleRegularFormClick = () => {
    setFormName('regular');
    form2.resetFields();
    setFormDisabled('random')
  }
  const handleRandomFormClick = () => {
    setFormName('random');
    form1.resetFields();
    setFormDisabled('regular')
  }

  const regularFormFinish:FormProps<RegularFormFields>['onFinish'] = ({number, type}) => {
    navigate(`facts?number=${number}&type=${type}`);
  }

  const randomFormFinish:FormProps<RandomFormFields>['onFinish'] = ({type}) => {
    navigate(`facts?number=${RANDOM}&type=${type}`);
  }

  const handleSubmit = async () => {
    if(formName==='regular') {
      form1.submit();
    }
    if(formName==='random') {
      form2.submit();
    }
  }

  return (
    <Flex vertical gap='4rem' align='center' className={styles['main-page-container']}>
      <Flex  justify='space-around' gap='6rem'>
        <RegularForm
          form={form1}
          onFinish={regularFormFinish}
          onFormClick={handleRegularFormClick}
          formDisabled={formDisabled === 'regular'}
        />
        <FormSelector />
        <RandomForm
          form={form2}
          onFinish={randomFormFinish}
          onFormClick={handleRandomFormClick}
          formDisabled={formDisabled === 'random'}
        />
      </Flex>
      <SubmitButton
        disabled={false}
        onSubmit={handleSubmit}
      />
    </Flex>
  )
}

export default MainPage;
