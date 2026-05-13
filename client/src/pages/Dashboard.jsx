import { useState, useEffect } from "react";
import { api } from "../api/axios";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { SummaryCards } from "../components/SummaryCards";
import { ChartSection } from "../components/ChartSection";
import { TransactionList } from "../components/TransactionList";
import { SPENDING_COMPOSITION } from "../constants";
import "./Dashboard.css";

export function Dashboard({ transactions }) {
  const [transactionSummary, setTransactionSummary] = useState({});
  const [expenses, setExpenses] = useState({});

  useEffect(() => {
    const getTransactionSummary = async () => {
      try {
        const response = await api.get("/transactions/summary");
        setTransactionSummary(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getSpendingComposition = async () => {
      try {
        const response = await api.get("/transactions/spending-composition");
        console.log("respons.data: ", response.data);
        console.log("respons.data.data: ", response.data.data);
        setExpenses(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getTransactionSummary();
    getSpendingComposition();
  }, []);

  return (
    <>
      <title>The Fiscal Atelier - Dashboard</title>

      <div className="app-container">
        <Sidebar />

        <main className="main-content">
          <Header pageTitle={"The Editorial Ledger"} />

          <div className="content-wrapper">
            <SummaryCards transactionSummary={transactionSummary} />
            <ChartSection expenses={expenses} />

            <section className="table-section">
              <div className="section-header">
                <h4>Recent Entries</h4>
                <button className="text-btn">
                  Archive Access <i data-lucide="arrow-right"></i>
                </button>
              </div>
              <TransactionList transactions={transactions} page="Dashboard" />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
