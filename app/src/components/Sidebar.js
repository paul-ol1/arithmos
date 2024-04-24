import React, { useState, useEffect } from "react";
import styles from "../Styles/sidebar.module.css";
import { Link, useNavigate,useLocation } from "react-router-dom";
export const Sidebar: React.FC = () => {
let navigate = useNavigate();
let location = useLocation();
const handleItemClick = (path, index) => {
navigate(path);
};
const pathname = location.pathname;
const pathSegments = pathname.split("/").filter((segment) => segment !== "");
const handleSwitch=(index)=>{
    console.log(index);
const allItems = document.getElementsByClassName(styles.item);
for (let i = 0; i < allItems.length; i++) {
    if (index == i) {
        allItems[i].className = `${styles.item} ${styles.active}`;
    } else {
        allItems[i].className = `${styles.item}`;
    }
}
}

useEffect(() => {
    
    switch (pathSegments[0]) {
        case "":
            handleSwitch(0);
            break;
        case "Sales":
            handleSwitch(1);
            break;
        case "Orders":
            handleSwitch(2);
            break;
        case "Customers":
            handleSwitch(3);
            break;
        case "Settings":
            handleSwitch(4);
            break;
        default:
            handleSwitch(0);
            break;
    }
}, [pathSegments]);
return (
<div className={styles.SidebarContainer}>
    <div className={styles.logoarea}></div>
    <div className={styles.general}>
    <h2 className={styles.Sidebarheadtext}>General</h2>
    <br></br>
    <div
        className={`${styles.item} ${styles.active}`}
        onClick={() => handleItemClick("/", 0)}>
        <div>
        <img src="../Icons/inventory.svg" loading="lazy"></img>
        </div>
        <h3>Inventory</h3>
    </div>
    <div
        className={`${styles.item}`}
        onClick={() => handleItemClick("/Sales", 1)}>
        <div>
        <img src="../Icons/sales.svg" loading="lazy"></img>
        </div>
        <h3>Sales</h3>
    </div>
    <div
        className={`${styles.item}`}
        onClick={() => handleItemClick("/Orders", 2)}>
        <div>
        <img src="../Icons/order.svg" loading="lazy"></img>
        </div>
        <h3>Orders</h3>
    </div>
    <div
        className={`${styles.item}`}
        onClick={() => handleItemClick("/Customers", 3)}>
        <div>
        <img src="../Icons/customer.svg" loading="lazy"></img>
        </div>
        <h3>Customers</h3>
    </div>
    <br></br>
    <div className={styles.divider}></div>
    </div>
    <div className={styles.others}>
    <br></br>
    <h2 className={styles.Sidebarheadtext}>Others</h2>

    <br></br>
    <div
        className={`${styles.item}`}
        onClick={() => handleItemClick("/Settings", 4)}>
        <div>
        <img src="../Icons/settings.svg" loading="lazy"></img>
        </div>
        <h3>Settings</h3>
    </div>
    <div className={`${styles.item}`}>
        <div>
        <img src="../Icons/logout.svg" loading="lazy"></img>
        </div>
        <h3>Log Out</h3>
    </div>
    </div>
</div>
);
};
