import { Outlet } from "react-router";
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};

export default Layout;