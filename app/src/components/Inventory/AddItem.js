import React from "react";
import styles from "../../Styles/InventoryStyles/additem.module.css";

export const AddItem: React.FC = () => {
  return (
    <div>
      <div className={styles.title}>Add New Product</div>
      <div className={styles.content}>
        <form action="/api/items" method="post" className={styles.form}>
          <div className={styles.inputsection}>
            <label htmlFor="name">Product Name</label>
            <input type="text" name="name" className={styles.inputContainer} />
          </div>
          <div className={styles.inputsection}>
            <label htmlFor="pid">Product Id</label>
            <input type="text" name="pid" className={styles.inputContainer} />
          </div>
          <div className={styles.inputsection}>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              className={styles.inputContainer}
            />
          </div>
          <div className={styles.inputsection}>
            <label htmlFor="supplier">Supplier</label>
            <input
              type="text"
              name="supplier"
              className={styles.inputContainer}
            />
          </div>
          <div className={styles.inputsection}>
            <label htmlFor="building">Building</label>
            <input
              type="text"
              name="building"
              className={styles.inputContainer}
            />
          </div>
          <div className={styles.inputsection}>
            <label htmlFor="shelf">Shelf</label>
            <input type="text" name="shelf" className={styles.inputContainer} />
          </div>
          <div className={styles.inputsection}>
            <label htmlFor="buyp">Buy Price</label>
            <input
              type="number"
              name="buyp"
              className={styles.inputContainer}
            />
          </div>
          <div className={styles.inputsection}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              className={styles.inputContainer}
            />
          </div>
          <div className={styles.inputsection}>
            <label htmlFor="askingp">Asking Price</label>
            <input
              type="number"
              name="askingp"
              className={styles.inputContainer}
            />
          </div>
          <button type="submit" className={styles.submit}>
            <img src="../Icons/addbutton.svg" alt="add Icon" />
          </button>
        </form>
      </div>
    </div>
  );
};
