import React, { useEffect } from "react";
import styles from "../../Styles/SalesStyles/Salessubh.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Salessubh: React.FC = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  const handleItemClick = (path) => {
    navigate(path);
  };

  const handleLocation = (index) => {
    const allelement = document.getElementsByClassName(styles.element);
    for (let i = 0; i < allelement.length; i++) {
      allelement[i].className = styles.element;
    }
    allelement[index].className = `${styles.element} ${styles.active}`;
  };
  useEffect(() => {
    switch (pathSegments[1]) {
      case "list":
        handleLocation(1);
        break;
      case "add":
        handleLocation(2);
        break;
      case "charts":
        handleLocation(3);
        break;
      default:
        handleLocation(0);
    }
  }, [pathSegments]);
  return (
    <div className={styles.container}>
      <div
        className={`${styles.element} ${styles.active}`}
        onClick={() => {
          handleItemClick("/Sales/");
        }}>
        <img src="../Icons/dashboard.svg" loading="lazy"></img>
        <p> Dashboard</p>
      </div>
      <div
        className={styles.element}
        onClick={() => {
          handleItemClick("/Sales/list");
        }}>
        <img src="../Icons/list.svg" loading="lazy" />
        <p>List</p>
      </div>
      <div
        className={styles.element}
        onClick={() => {
          handleItemClick("/Sales/charts");
        }}>
        <img src="../Icons/charts.svg" alt="" loading="lazy" />
        <p>Charts</p>
      </div>
    </div>
  );
};
