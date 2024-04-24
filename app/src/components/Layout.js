import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import {Title} from './Title';
import styles from "../Styles/layout.module.css";
export const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header/>
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};
