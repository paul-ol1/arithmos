import React from "react";
import { Inventorysubh } from "../components/Inventory/Inventorysubh";
import { InventoryDashboard } from "../components/Inventory/InventoryDashboard";
import { AddItem } from "../components/Inventory/AddItem";
import styles from "../Styles/Inventory.module.css";

import { Outlet, Route,Routes } from "react-router-dom";


export const Inventory: React.FC = () => {

  return (
    <div className="page">
      <div className="subheader">
        <Inventorysubh />
      </div>
      <div className={styles.content}>
        <Outlet/>
      </div>
    </div>
  );
};
