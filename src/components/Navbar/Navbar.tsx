import { Link, useMatch } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth } from "utils/Auth/Auth";

function useActiveLink(to: string) {
  const match = useMatch(to);
  return match ? styles.active : "";
}

const NavBar: React.FunctionComponent = () => {
  const auth = useAuth();
  return (
    <nav className={styles.nav}>
      <Link className={`${styles["nav-item"]} ${useActiveLink("/")}`} to="/">
        Home
      </Link>

      <Link
        className={`${styles["nav-item"]} ${useActiveLink("/about")}`}
        to="/about"
      >
        About
      </Link>

      <Link
        className={`${styles["nav-item"]} ${useActiveLink("/products")}`}
        to="/products"
      >
        Products
      </Link>

      <Link
        className={`${styles["nav-item"]} ${useActiveLink("/users")}`}
        to="/users"
      >
        Users
      </Link>

      <Link
        className={`${styles["nav-item"]} ${useActiveLink("/profile")}`}
        to="/profile"
      >
        Profile
      </Link>
      {!auth.username && (
        <Link className={styles["nav-item"]} to="/login">
          Login
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
