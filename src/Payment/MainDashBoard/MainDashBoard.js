
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import DashLoader from "../DashLoader/DashLoader";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { selectUser } from "../../redux/features/auth/authSlice";
import "./MainDashBoard.css";
import PaymentLinks from "../PaymentLinks/PaymentLinks";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const GET_ONE_USER = `${BACKEND_URL}api/users`;
const CHECK_MATURITY = `${BACKEND_URL}api/invest/deposit-maturity`;

const MainDashBoard = () => {
  const [balance, setBalance] = useState(0);
  const [investmentBalance, setInvestmentBalance] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [loading, setLoading] = useState(true);
  const user = useSelector(selectUser);

  const formatCurrency = (num) => `$${Number(num).toLocaleString()}`;

  const fetchUserData = async () => {
    setLoading(true);
    try {
      await axios.get(CHECK_MATURITY);
      const { data } = await axios.get(`${GET_ONE_USER}/getUser`);
      setBalance(data.balance);
      setInvestmentBalance(data.investmentBalance);
      setTotalProfit(data.totalMaturityAmount);
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useRedirectLoggedOutUser("/login");

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="user-block">
          <h2>Hello {user?.name || "User"} !</h2>
          <p>Account Overview</p>
        </div>
        <ul className="quick-links">
          <li>
            Balance: {loading ? <DashLoader /> : formatCurrency(balance)}
          </li>
          <li>
            Invested:{" "}
            {loading ? <DashLoader /> : formatCurrency(investmentBalance)}
          </li>
          <li>
            Profit: {loading ? <DashLoader /> : formatCurrency(totalProfit)}
          </li>
        </ul>
      </aside>

      <main className="main-panel">
        <section className="top-summary">
          <div className="summary-box">
            <h4>Total Deposit</h4>
            <p>{loading ? <DashLoader /> : formatCurrency(balance)}</p>
          </div>
          <div className="summary-box">
            <h4>Active Investments</h4>
            <p>
              {loading ? <DashLoader /> : formatCurrency(investmentBalance)}
            </p>
          </div>
          <div className="summary-box">
            <h4>Profit Earned</h4>
            <p>{loading ? <DashLoader /> : formatCurrency(totalProfit)}</p>
          </div>
        </section>

        <section className="activity-log">
          <PaymentLinks />
        </section>
      </main>
    </div>
  );
};

export default MainDashBoard;
