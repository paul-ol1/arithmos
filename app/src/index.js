import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import reportWebVitals from "./reportWebVitals";
import { Layout } from "./components/Layout";
import {Sales} from "./pages/Sales";
import { Inventory } from "./pages/Inventory";
import { InventoryDashboard } from "./components/Inventory/InventoryDashboard";
import { OrdersDashboard } from "./components/Orders/OrdersDashboard";
import { OrderPage } from "./components/Orders/OrderPage";
import { AddItem } from "./components/Inventory/AddItem";
import { InventoryCharts } from "./components/Inventory/InventoryCharts";
import { InventoryList } from "./components/Inventory/InventoryList";
import { SalesDashboard } from "./components/Sales/SalesDashboard";
import { SalesList } from "./components/Sales/SalesList";
import { SalesCharts } from "./components/Sales/SalesCharts";
import { Order } from "./pages/Order";
import { Customers } from "./pages/Customers";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Inventory />}>
            <Route index element={<InventoryDashboard />} />
            <Route path="list" element={<InventoryList />} />
            <Route path="add" element={<AddItem />} />
            <Route path="charts" element={<InventoryCharts />} />
          </Route>
          <Route path="Sales" element={<Sales />}>
            <Route index element={<SalesDashboard />} />
            <Route path="list" element={<SalesList />} />
            <Route path="charts" element={<SalesCharts />} />
          </Route>

          <Route path="orders" element={<Order />}>
            <Route index element={<OrdersDashboard />} />
            <Route path='order' element={<OrderPage />} />
          </Route>
          <Route path="customers" element={<Customers />} />
        </Route>
      </Routes>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
