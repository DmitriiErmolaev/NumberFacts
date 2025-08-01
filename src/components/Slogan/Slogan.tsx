import styles from './Slogan.module.scss';

const Slogan = () => {
  return (
    <p className={styles['fancy-slogan']} >
      <span className={styles['select-word']}>Select</span>
      <span  className={styles['and-word']} >&</span>
      <span  className={styles['wonder-word']} >Wonder</span>
    </p>
  );
};

export default Slogan;