import { Link, useMatch } from "react-router-dom";
import styles from "./Navbar.module.css";

function useActiveLink(to: string) {
  const match = useMatch(to);
  return match ? styles.active : "";
}

const NavBar: React.FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      <Link className={`${styles["nav-item"]} ${useActiveLink("/")}`} to="/">
        Home
      </Link>
      |
      <Link
        className={`${styles["nav-item"]} ${useActiveLink("/about")}`}
        to="/about"
      >
        About
      </Link>
      |
      <Link
        className={`${styles["nav-item"]} ${useActiveLink("/products")}`}
        to="/products"
      >
        Products
      </Link>
      |
      <Link
        className={`${styles["nav-item"]} ${useActiveLink("/users")}`}
        to="/users"
      >
        Users
      </Link>
    </nav>
  );
};

export default NavBar;
