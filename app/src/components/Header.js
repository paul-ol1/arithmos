import React from "react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { createRoot } from "react-dom/client";
import styles from "../Styles/header.module.css";
import Title from "./Title";
function activElemHandler(newactive, curr) {}

function notification() {
  return (
    <div className={styles.notification}>
      <h1 className={styles.notif_title}>Notifications</h1>
      <div className={styles.notif_content}>
        <div className={styles.notif_row}></div>
        <div className={styles.notif_row}></div>
        <div className={styles.notif_row}></div>
        <div className={styles.notif_row}></div>
        <div className={styles.notif_row}></div>
        <div className={styles.notif_row}></div>
        <div className={styles.notif_row}></div>
      </div>
    </div>
  );
}

export const Header: React.FC = () => {
  let location = useLocation();
  const pathname = location.pathname;

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const [title, setTitle] = useState();


  let activitydisplay = useRef(null);
  const [isActive, setIsActive] = useState(null);
  const [displaySb, setDisplaySB] = useState(false);
  const [displayNotification, setDisplayNotificattions] = useState(false);
  function activityContent(currentstate) {
    console.log(currentstate);
    if (currentstate) {
      if (activitydisplay.current) {
        const notif = notification();
        setDisplaySB(false);
        const tempContainer = document.createElement("div");
        const root = createRoot(tempContainer);
        root.render(notif);
        activitydisplay.current.appendChild(tempContainer);
      }
    } else {
      activitydisplay.current.innerHTML = "";
    }
  }
  useEffect(() => {
    switch (pathSegments[0]) {
        case "":
            setTitle("Inventory");
            break;
        case "Sales":
            setTitle("Sales");
            break;
        case "Orders":
            setTitle("Orders");
            break;
        case "Customers":
            setTitle("Customers");
            break;
        case "Settings":
            setTitle("Settings");
            break;
        default:
            setTitle("Inventory");
            break;
    }
    const handleWindowClick = (event) => {
      if (event.target.tagName != "IMG" &&  event.target.tagName != "INPUT") {
        setDisplaySB(!displaySb);
      }
    };
    if (displaySb) {
      window.addEventListener("click", handleWindowClick);
    }
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [displaySb,pathSegments]);
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.HeaderStart}>
        <h2 className={styles.HeaderTitle}>{title}</h2>
      </div>
      <div className={styles.HeaderEnd}>
        <div className={styles.activitycenter}>
          <div className={styles.icons}>
            {displaySb ? (
              <div>
                <input className={styles.headersb}></input>
              </div>
            ) : (
              <div
                className={styles.icon}
                onClick={() => {
                  setDisplaySB(!displaySb);
                }}>
                <img
                  src="../Icons/search-icon.svg"
                  loading="lazy"></img>
              </div>
            )}

            <div
              onClick={() => {
                setDisplayNotificattions(!displayNotification);
                activityContent(!displayNotification);
              }}
              className={styles.icon}>
              <img src="../Icons/notification-icon.svg"></img>
            </div>
            <div className={styles.icon}>
              <img src="../Icons/cart.svg"></img>
            </div>
          </div>
          <div ref={activitydisplay} className={styles.activitydisplay}></div>
        </div>

        <div className={styles.userCutout}>
          <img
            src="../img/base.jpeg"
            loading="lazy"
            className={styles.user}></img>
          <p>John Doe</p>
          <img src="../Icons/downarrow.svg"></img>
        </div>
      </div>
    </div>
  );
};
