import { Button, Descriptions, Flex, Typography, type DescriptionsProps } from 'antd';
import { useGetFacts } from '../api';
import { Link, useSearchParams } from 'react-router';
import { ArrowLeftOutlined } from '@ant-design/icons';
import styles from './NumberFacts.module.scss';

const NumberFacts = () => {
  const [searchParams] = useSearchParams();
  const number = searchParams.get('number');
  const type = searchParams.get('type');
  const [facts, error] = useGetFacts(number, type);

  const items: DescriptionsProps['items'] = [
    {
      key: 'type',
      label: 'Type',
      children: type,
      span: 5
    },
    {
      key: 'number',
      label: 'Number',
      children: number,
      span: 5
    },
    (!error ? {
      key: 'facts',
      label: 'Facts',
      children: facts,
      span: 'filled'
    } : {
      key: 'error',
      label: <Typography.Text type='danger'>Error</Typography.Text>,
      children: <Typography.Text type='danger'>{error}</Typography.Text>,
      span: 'filled'
    })
  ]

  return (
    <Flex vertical gap='4rem' className={styles['number-facts-container']}>
      <Link to='/'>
        <Button icon={<ArrowLeftOutlined /> } type='dashed'>Back to form</Button>
      </Link>
      <Descriptions title="Facts Info" items={items} bordered/>
    </Flex>
  );
};

export default NumberFacts;