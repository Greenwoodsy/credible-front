import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import "./Chart.css";

const MarketInsights = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.TradingView) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = () => {
        initializeCharts();
        setLoading(false);
      };
      document.body.appendChild(script);
    } else {
      initializeCharts();
      setLoading(false);
    }
  }, []);

  const initializeCharts = () => {
    if (!window.TradingView || !window.TradingView.widget) {
      console.error("TradingView library not loaded.");
      return;
    }

    // Forex Chart
    new window.TradingView.widget({
      container_id: "forex-chart",
      width: "100%",
      height: 400,
      symbol: "OANDA:EURUSD",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      toolbar_bg: "#f5fbf9",
      enable_publishing: false,
      hide_side_toolbar: false,
      allow_symbol_change: true,
    });

    // Crypto Chart
    new window.TradingView.widget({
      container_id: "crypto-chart",
      width: "100%",
      height: 400,
      symbol: "BINANCE:BTCUSDT",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      toolbar_bg: "#1a7a66",
      enable_publishing: false,
      hide_side_toolbar: false,
      allow_symbol_change: true,
    });
  };

  return (
    <>
      <div className="market-container">
        <h1 className="market-heading">Market Insights: Forex & Crypto</h1>

        {loading && <div className="loading-bar"></div>}

        <div className="chart-section">
          <h2 className="chart-title">Forex Chart</h2>
          <div id="forex-chart" className="chart-box"></div>
        </div>

        <div className="chart-section">
          <h2 className="chart-title">Crypto Chart</h2>
          <div id="crypto-chart" className="chart-box"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketInsights;
