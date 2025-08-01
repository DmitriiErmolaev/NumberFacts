import type { ReactNode } from "react";
import styles from './FormContainer.module.scss';

const FormContainer = ({
  disabled,
  children,
  onClick,
}:{
  disabled: boolean;
  children: ReactNode;
  onClick:() => void;
}) => {
  const classname = `${styles['form-container']} ${disabled ? styles.disabled : ''}`
  return (
    <div className={classname} onClick={onClick}>
      {children}
    </div>
  );
};

export default FormContainer;