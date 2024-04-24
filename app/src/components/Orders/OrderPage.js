import React, { useRef } from "react";
import ReactDOM from "react-dom";
import styles from "../../Styles/OrdersStyles/OrderPage.module.css";
import { createRoot } from "react-dom/client";

function newRow(){
     const handleStatus = (e) => {
        e.preventDefault();
        let status = e.target.textContent;
        const choices = ['unordered','pending','received'];
        const index=choices.indexOf(status)
        const currstatus = choices[(index + 1) % 3];
        e.target.textContent = currstatus
        e.target.className = `${styles[currstatus]} ${styles.orderstatus}`;
        console.log(e.target);
     };

    return(
        <div className={styles.row}>
            <div className={styles.rowelem}><input placeholder="Product ID"></input></div>
            <div className={styles.rowelem}><input placeholder="Product Name"></input></div>
            <div className={styles.rowelem}><input placeholder="Quantity"></input></div>
            <div className={styles.rowelem}><input placeholder="Price"></input></div>
            <div className={styles.rowelem}><button onClick={handleStatus} className={`${styles.unordered} ${styles.orderstatus}`}>unordered</button></div>
            <div className={styles.addnew}>
                <button className={styles.remove}>-</button>
            </div>
        </div>
    )
}


export const OrderPage: React.FC = () => {
    const newRowDiv = useRef(null);
    function handleAdd() {
        const newrow = newRow();
        if (newRowDiv.current) {
          const newrow = newRow();
          // Create a temporary container
          const tempContainer = document.createElement("div");
          const root = createRoot(tempContainer);
          root.render(newrow);
          newRowDiv.current.appendChild(tempContainer);
        }
    }

    return (
        <div >
            <div className={styles.upperSection} >
                <div  className={styles.OrderDetails}>
                    <div className={styles.left}>
                        <input placeholder="Enter a name...." className={styles.detailsinput}></input>
                        <input placeholder="Enter a supplier" className={styles.detailsinput}></input>
                    </div>
                    <div className={styles.right}>
                        <button className={`${styles.pending} ${styles.orderstatus}`}>Pending</button>
                        <button className={`${styles.received} ${styles.orderstatus}`}>Received</button>
                        <button className={`${styles.unordered} ${styles.orderstatus}`}>Not Ordered</button>
                    </div>
                </div>
                <div className={styles.orderaction}>
                    <button className={styles.action} id={styles.save}>Save</button>
                    <button className={styles.action} id={styles.delete}>Delete</button>
                </div>
            </div>
            <div className={styles.LowerSection}>
                <div className={styles.header}>
                    <div className={styles.rowelem}>Product ID</div>
                    <div className={styles.rowelem}>Product Name</div>
                    <div className={styles.rowelem}>Quantity</div>
                    <div className={styles.rowelem}>Price</div>
                    <div className={styles.rowelem}>Status</div>
                    <div className={styles.addnew} onClick={()=>{handleAdd()}}>
                        <img src="../Icons/add.svg" alt="add new"></img>
                    </div>
                </div>
                <div className={styles.OrderList} ref={newRowDiv}>

                </div>
            </div>
        </div>
    )
}