import React, { useEffect } from "react";
import styles from "../../Styles/OrdersStyles/OrdersDashboard.module.css";

const testdata = [
  {
    name: "x order",
    supplier: "a supplier",
    status: "Pending",
    id: 2
  },
  {
    name: "y order",
    supplier: "b supplier",
    status: "Received",
    id: 1
  },
  {
    name: "z order",
    supplier: "c supplier",
    status: "Incomplete",
    id: 3
  },
  {
    name: "w order",
    supplier: "d supplier",
    status: "s",
    id: 4
  },
];
export const OrdersDashboard: React.FC = () => {
    useEffect(() => {
        const ordersContainer = document.querySelectorAll(`.${styles.OrderElement}`);

        ordersContainer.forEach((x,index)=>{
            x.style.animation = `${styles.fadeInDelay} 1s ease-out ${index * 0.5}s`;
        })
    }, []);
    return (
        <div className={styles.maincontainer}>
            <div className={styles.DateRangeContainer}>
                <div className={styles.daterange}>
                    <img src="../Icons/calendar.svg" alt="Calendar Icon"></img>
                    <p>mar 15,2024</p>
                    <span>-</span>
                    <p>mar 22,2024</p>
                </div>
            </div>
            <div>
            <h2 className={styles.title}>Orders List</h2>
            <div id={styles.OrdersContainer}>
                <div className={styles.create}>Create Order</div>
                {testdata.map((x, index) => {
                return (
                    <div key={x.id} className={styles.OrderElement}>
                    <span
                        className={styles.OrderName}>{`${x.name}/ ${x.supplier}`}</span>
                    <button className={`${styles.status} ${styles[x.status]} `}>
                        {x.status}
                    </button>
                    </div>
                );
                })}
            </div>
            </div>
            </div>
        );
};
