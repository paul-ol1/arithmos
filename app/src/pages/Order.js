import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import styles from "../Styles/Orders.module.css";
export const Order: React.FC = () => {
  return (
    <div className="page">
      <div className="subheader">
        
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
