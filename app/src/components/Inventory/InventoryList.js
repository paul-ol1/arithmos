import React from "react";
import styles from "../../Styles/InventoryStyles/Inventorylist.module.css";
export const InventoryList: React.FC = () => {
  const tesdivata = [
    {
      name: "Test Item",
      quantity: 10,
      pid: "testitem",
      building: "Woodworking",
      shelf: "Level 2",
      supplier: "Supplier A",
    },
    {
      name: "Another Test Item",
      quantity: 5,
      pid: "anothertestitem",
      building: "Blacksmithing",
      shelf: "Level 3",
      supplier: "Supplier B",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
    {
      name: "Yet Another Test Item",
      quantity: 0,
      pid: "yetanotheritem",
      building: "Carpentry",
      shelf: "Level 1",
      supplier: "Supplier C",
    },
  ];
  return (
    <div className={styles.content}>
      <div className={styles.classheader}>
        <div className={styles.searchbararea}>
          <img
            src="../Icons/search-icon.svg"
            loading="lazy"
            className={styles.icon}></img>
          <input type="text" placeholder="Search" className={styles.inputbar} />
        </div>
      </div>
      <div className={styles.main}>
        <p className={styles.mainheader}>All Products (12,320)</p>
        <div className={styles.box}>
          <div className={styles.header}>
            <div className={styles.rowelem}>
              Product ID
              <img
                className={styles.sortarrow}
                src="../Icons/downarrow.svg"></img>
            </div>
            <div className={styles.rowelem}>
              Product Name
              <img
                className={styles.sortarrow}
                src="../Icons/downarrow.svg"></img>
            </div>
            <div className={styles.rowelem}>
              Building
              <img
                className={styles.sortarrow}
                src="../Icons/downarrow.svg"></img>
            </div>
            <div className={styles.rowelem}>
              Shelf
              <img
                className={styles.sortarrow}
                src="../Icons/downarrow.svg"></img>
            </div>
            <div className={styles.rowelem}>
              Supplier
              <img
                className={styles.sortarrow}
                src="../Icons/downarrow.svg"></img>
            </div>
            <div className={styles.rowelem} id={styles.status}>

            </div>
          </div>
          <div className={styles.scrollableBody}>
            {tesdivata.map((item, index) => (
              <div key={index} className={styles.trow}>
                <div className={styles.tablerowelem} scope="row">
                  {item.name}
                </div>
                <div className={styles.tablerowelem} scope="row">
                  {item.pid}
                </div>
                <div className={styles.tablerowelem} scope="row">
                  {item.building}
                </div>
                <div className={styles.tablerowelem} scope="row">
                  {item.shelf}
                </div>
                <div className={styles.tablerowelem} scope="row">
                  {item.supplier}
                </div>
                <div className={styles.statusdiv}>
                  <div
                    className={
                      item.quantity == 0
                        ? `${styles.statuselem} ${styles.out}`
                        : item.quantity < 6
                        ? `${styles.statuselem} ${styles.low}`
                        : `${styles.statuselem} ${styles.in}`
                    }>
                    {item.quantity == 0
                      ? "Out of Stock"
                      : item.quantity < 6
                      ? "low Stock"
                      : "In Stock"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
