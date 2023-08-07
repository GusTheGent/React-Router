import React from "react";
import { ProductsProps } from "./types";
import { Link, Outlet } from "react-router-dom";
import styles from "./Products.module.css";

const Products: React.FunctionComponent<ProductsProps> = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h1>Products</h1>
        <input type="search" placeholder="Search products" />
        <nav className={styles.nav}>
          <Link className={styles["nav-item"]} to="featured">
            Featured
          </Link>
          <Link className={styles["nav-item"]} to="new">
            New
          </Link>
        </nav>
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Products;
