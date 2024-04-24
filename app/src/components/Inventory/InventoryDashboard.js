import React from "react";
import styles from "../../Styles/InventoryStyles/InventoryDashboard.module.css";

function overviewBoxes(){
    return (
      <div className={styles.overviewboxes}>
        <div className={styles.item}>
          <div className={styles.left}>
            <p className={styles.boxh}>Amount of Products</p>
            <p className={styles.boxv}>12,907</p>
          </div>
          <div className={styles.right}>
            <img src="../Icons/productbar.svg" alt="Products Icon" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <p className={styles.boxh}>Total Value</p>
            <p className={styles.boxv}>1,200,000,000</p>
          </div>
          <div className={styles.right}>
            <img src="../Icons/coins.svg" alt="Value Icon" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <p className={styles.boxh}>Total Buy Price</p>
            <p className={styles.boxv}>900,000,000</p>
          </div>
          <div className={styles.right}>
            <img src="../Icons/buy.svg" alt="BuyPrice Icon" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <p className={styles.boxh}>Expected Markup</p>
            <p className={styles.boxv}>300,000,000</p>
          </div>
          <div className={styles.right}>
            <img src="../Icons/markup.svg" alt="MarkUp Icon" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <p className={styles.boxh}>Inventory Turnover(ratio)</p>
            <p className={styles.boxv}>5.23</p>
          </div>
          <div className={styles.right}>
            <img src="../Icons/ratio.svg" alt="InventoryTurnOver Icon" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <p className={styles.boxh}>Inventory Turnover(days)</p>
            <p className={styles.boxv}>28 days</p>
          </div>
          <div className={styles.right}>
            <img src="../Icons/Calendar.svg" alt="Calendar" />
          </div>
        </div>
      </div>
    );
}
export const InventoryDashboard: React.FC = () => {

  return (
    <div>
      {/* Section 1 with overview */}
      <div className={styles.title}>
        <h1>Overview</h1>
      </div>
      <div>{overviewBoxes()}</div>

      {/* Section 2 with 2 very general charts(havent decided yet) */}
    </div>
  );
};
