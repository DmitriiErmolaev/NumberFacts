import { Flex } from "antd";
import styles from './FormSelector.module.scss';
import Slogan from "../Slogan/Slogan";

const FormSelector = () => {
  return (
    <Flex gap='1rem' align='center'>
      <span className={styles.arrow}>&larr;</span>
      <Slogan />
      <span className={styles.arrow}>&rarr;</span>
    </Flex>
  );
};

export default FormSelector;