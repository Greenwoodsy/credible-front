import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaPiggyBank, FaChartLine, FaMoneyBillWave, FaUsers,
  FaClipboardList, FaHourglassHalf
} from "react-icons/fa";
import { TbTargetArrow, TbReceipt } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdLockClock, MdOutlineVerifiedUser } from "react-icons/md";
import { AdminAuthorLink } from "../../components/protect/hiddenLink";
import "./PaymentLinks.css";

const PaymentLinks = () => {
  return (
    <div className="paymentLinksContainer">
      <NavLink to="/deposit-payment" className="paymentLinkItem">
        <p className="iconPay"><FaPiggyBank /></p>
        <p className="depoPay">Add Funds</p>
      </NavLink>

      <NavLink to="/start-invest" className="paymentLinkItem">
        <p className="iconPay"><TbTargetArrow /></p>
        <p className="depoPay">Start Investing</p>
      </NavLink>

      <NavLink to="/invest-status" className="paymentLinkItem">
        <p className="iconPay"><FaChartLine /></p>
        <p className="depoPay">Track Investments</p>
      </NavLink>

      <NavLink to="/plans" className="paymentLinkItem">
        <p className="iconPay"><FaClipboardList /></p>
        <p className="depoPay">View Plans</p>
      </NavLink>

      <NavLink to="/withdraw-wallet" className="paymentLinkItem">
        <p className="iconPay"><GiTakeMyMoney /></p>
        <p className="depoPay">Withdraw Funds</p>
      </NavLink>

      <AdminAuthorLink>
        <NavLink to="/admin-pending-wallet" className="paymentLinkItem">
          <p className="iconPay"><FaHourglassHalf /></p>
          <p className="depoPay">Withdrawals Queue</p>
        </NavLink>
      </AdminAuthorLink>

      <AdminAuthorLink>
        <NavLink to="/admin-pending-deposit" className="paymentLinkItem">
          <p className="iconPay"><MdLockClock /></p>
          <p className="depoPay">Unconfirmed Deposits</p>
        </NavLink>
      </AdminAuthorLink>

      <AdminAuthorLink>
        <NavLink to="/admin-pending-investment" className="paymentLinkItem">
          <p className="iconPay"><FaMoneyBillWave /></p>
          <p className="depoPay">Queued Investments</p>
        </NavLink>
      </AdminAuthorLink>

      <AdminAuthorLink>
        <NavLink to="/pending-kyc" className="paymentLinkItem">
          <p className="iconPay"><MdOutlineVerifiedUser /></p>
          <p className="depoPay">KYC Reviews</p>
        </NavLink>
      </AdminAuthorLink>

      <NavLink to="/referrals" className="paymentLinkItem">
        <p className="iconPay"><FaUsers /></p>
        <p className="depoPay">Referral Network</p>
      </NavLink>

      <NavLink to="/transaction-History" className="paymentLinkItem">
        <p className="iconPay"><TbReceipt /></p>
        <p className="depoPay">Payment History</p>
      </NavLink>
    </div>
  );
};

export default PaymentLinks;
