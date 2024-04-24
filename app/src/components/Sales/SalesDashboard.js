import React from "react";
import Chart from "react-apexcharts";
import styles from "../../Styles/SalesStyles/SalesDashboard.module.css";
const salesoverviewdata = {
  revenue: 100000,
  cogs: 75000,
  profit: 25000,
  customers: 346,
  aogs: 134,
};

const todaydata = [
  {
    Product: "aaaaaaqqqqqqqqqqqqqqsssssssssssqqqqqqq",
    Quantity: 89,
    Price: "10000",
    Time: "11:56",
    Status: "paid",
  },
  {
    Product: "bbbbb",
    Quantity: 12,
    Price: "15000",
    Time: "12:20",
    Status: "pending",
  },
  {
    Product: "bbbbb",
    Quantity: 12,
    Price: "15000",
    Time: "12:20",
    Status: "pending",
  },
  {
    Product: "bbbbb",
    Quantity: 12,
    Price: "15000",
    Time: "12:20",
    Status: "pending",
  },
  {
    Product: "bbbbb",
    Quantity: 12,
    Price: "15000",
    Time: "12:20",
    Status: "pending",
  },
  {
    Product: "bbbbb",
    Quantity: 12,
    Price: "15000",
    Time: "12:20",
    Status: "pending",
  },
  {
    Product: "bbbbb",
    Quantity: 12,
    Price: "15000",
    Time: "12:20",
    Status: "pending",
  },
  {
    Product: "bbbbb",
    Quantity: 12,
    Price: "15000",
    Time: "12:20",
    Status: "pending",
  },
  {
    Product: "bbbbb",
    Quantity: 12,
    Price: "15000",
    Time: "12:20",
    Status: "pending",
  },
];
function salesOverviewBoxes(data) {
  return (
    <div className={styles.salesOverviewBoxes}>
      <div className={styles.box}>
        <div className={styles.left}>
          <p>Total Revenue</p>
          <p>{data.revenue}</p>
        </div>
        <div className={styles.right}>
          <img src="../Icons/revenue.svg" alt="Revenue Icon" />
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.left}>
          <p>Cost of Goods Sold</p>
          <p>{data.cogs}</p>
        </div>
        <div className={styles.right}>
          <img src="../Icons/cost.svg" alt="Revenue Icon" />
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.left}>
          <p>Gross Profit</p>
          <p>{data.profit}</p>
        </div>
        <div className={styles.right}>
          <img src="../Icons/profit.svg" alt="Revenue Icon" />
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.left}>
          <p>Goods Sold</p>
          <p>{data.aogs}</p>
        </div>
        <div className={styles.right}>
          <img src="../Icons/aogs.svg" alt="Revenue Icon" />
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.left}>
          <p>amount of customers</p>
          <p>{data.customers}</p>
        </div>
        <div className={styles.right}>
          <img src="../Icons/customer.svg" alt="Revenue Icon" />
        </div>
      </div>
    </div>
  );
}

function salesToday(data) {
  return (
    <div className={styles.today}>
      <h3>Sales Today</h3>
      <div className={styles.todayTable}>
        <table>
          <thead>
            <tr className={styles.theader}>
              {Object.keys(data[0]).map((x) => {
                return (
                  <th scope="col" className={styles.tableheadelem} key={x}>
                    {x}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className={styles.tb}>
            {data.map((x, index) => {
              return (
                <tr key={index}>
                  {Object.keys(data[index]).map((x,columnIndex,keys) => {
                    return (
                      <td scope="row" className = { styles.tablerowelem} key={columnIndex}>
                        {columnIndex === keys.length - 1 ?<div className={`${styles.status} ${styles[data[index][x]]}`}>{data[index][x]}</div>:data[index][x]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
function highestSellingToday(salesdata){
      const chartData = {
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: "donut",
          },
          labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
          legend: {
            position: "bottom",
            horizontalAlign: "center",
            show: false,


          },
          
          dataLabels: {
            enabled: false,
          },
        },
      };

  // Render the component
  return (
    <div className={styles.hsToday}>
      <h1>Highest selling today</h1>

      <div>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="donut"
          width="100%"
        />
      </div>
    </div>
  );
};

export const SalesDashboard: React.FC = () => {
  const areachartdetails = {
    options: {
      chart: {
        type: "area",
        id: "basic-area",
        background: "#ffffff",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true, // Hide axes and labels for a sparkline appearance
        },
      },
      title: {
        text: "Revenue (last 7 days)",
        align: "center",
        style: {
          fontSize: "20px",
          color: "#80a7ec",
          fontWeight: 600,
        },
      },
      xaxis: {
        categories: [
          "Mon, 01 Jan",
          "Tue,02 Jan",
          "Wed, 03 Jan",
          "Thu,04 Jan",
          "Fri, 05 Jan",
          "Sat, 06 Jan",
          "Today",
        ],
        labels: {
          show: false, // Hide x-axis labels
        },
      },

      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Revenue",
        data: [30, 40, 45, 50, 49, 60, 70],
      },
    ],
  };

  return (
    <div className={styles.container}>
      {/*<h1 className={styles.dashTitle}>Overview</h1>*/}
      <div className={styles.upperSection}>
        {salesOverviewBoxes(salesoverviewdata)}
        <div className={styles.chart}>
          <Chart
            options={areachartdetails.options}
            series={areachartdetails.series}
            type="area"
            height="90%"
            width="100%"
          />
        </div>
      </div>
      <div className={styles.lowerSection}>
        <div className={styles.lowerLeft}>{salesToday(todaydata)}</div>
        <div className={styles.lowerRight}>{highestSellingToday()}</div>
      </div>
    </div>
  );
};
