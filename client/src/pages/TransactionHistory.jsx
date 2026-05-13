import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { TransactionHistoryHeader } from "../components/TransactionHistoryHeader";
import { FilterBar } from "../components/FilterBar";
import { TransactionList } from "../components/TransactionList";
import { MOCK_TRANSACTIONS } from "../constants";
import "./TransactionHistory.css";

export function TransactionHistory({ transactions }) {
  return (
    <>
      <title>The Fiscal Atelier - Transactions</title>

      <div className="app-container">
        <Sidebar />

        <main className="main-content">
          <Header pageTitle={"Transaction Ledger"} />

          <div className="content-wrapper">
            <TransactionHistoryHeader />
            <FilterBar />

            <TransactionList
              transactions={transactions}
              page="TransactionHistory"
            />
          </div>
        </main>
      </div>
    </>
  );
}
