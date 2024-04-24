import React from "react";
import { Salessubh } from "../components/Sales/Salessubh";
import { Outlet } from "react-router-dom";
import styles from "../Styles/Sales.module.css";
export const Sales: React.FC = () => {

  return (
    <div className="page">
      <div className="subheader">
        <Salessubh />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};