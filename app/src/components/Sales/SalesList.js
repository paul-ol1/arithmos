import React from "react";
import styles from "../../Styles/SalesStyles/SalesList.module.css";

const data = [
  {
    name: "Apple",
    price: "$10",
    quantity: "256",
    id: "apple",
    customer: "John Doe",
    date: "25/04/24",
    time: "13:11",
  },
  {
    name: "Apple",
    price: "$10",
    quantity: "256",
    id: "apple",
    customer: "John Doe",
    date: "25/04/24",
    time: "13:11",
  },
  {
    name: "Apple",
    price: "$10",
    quantity: "256",
    id: "apple",
    customer: "John Doe",
    date: "25/04/24",
    time: "13:11",
  },
  {
    name: "Apple",
    price: "$10",
    quantity: "256",
    id: "apple",
    customer: "John Doe",
    date: "25/04/24",
    time: "13:11",
  },
  {
    name: "Apple",
    price: "$10",
    quantity: "256",
    id: "apple",
    customer: "John Doe",
    date: "25/04/24",
    time: "13:11",
  },
  {
    name: "Banana",
    price: "$7",
    quantity: "89",
    id: "banana",
    customer: "Jane Smith",
    date: "25/04/24",
    time: "13:11",
  },
];
function salesItem(item) {
  return item
    ? item.map((x, index) => {
        return (
          <div key={index} className={styles.salesbox}>
            <div className={styles.boxUpper}>
              <div className={styles.item}>
                <img src="../Icons/label.svg" alt="label"></img>
                <p>{x.name}</p>
              </div>
              <div className={styles.item}>
                <img src="../Icons/productbar.svg" alt="barcode"></img>
                <p>{x.id}</p>
              </div>
              <div className={styles.item}>
                <img src="../Icons/quantity.svg" alt="quantity"></img>
                <p>{x.quantity}</p>
              </div>
            </div>
            <div className={styles.boxLower}>
              <div className={styles.item}>
                <img src="../Icons/customer.svg" alt="customer"></img>
                <p>{x.customer}</p>
              </div>
              <div className={styles.item}>
                <img src="../Icons/coins.svg" alt="price"></img>
                <p>{x.price}</p>
              </div>
              <div className={styles.item}>
                <img src="../Icons/calendar.svg" alt="date"></img>
                <p>{x.date}</p>
              </div>
              <div className={styles.item}>
                <img src="../Icons/time.svg" alt="time"></img>
                <p>{x.time}</p>
              </div>
            </div>
          </div>
        );
      })
    : null;
}
export const SalesList: React.FC = () => {
  return (
    <>
      <div>
        <div className={styles.pageheader}>
          <p className={styles.count}>All Sales(450)</p>
          <div className={styles.filterscontainer}>
            <div className={styles.filters}>
              <div className={styles.date}>
                <img src="../Icons/calendar.svg" alt="Calendar Icon"></img>
              </div>
              <div className={styles.sort}>
                <p>sort by</p>
                <div className={styles.downarrowcontainer}>
                  <img src="../Icons/downarrow.svg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.saleslist}>{salesItem(data)}</div>
      </div>
    </>
  );
};
