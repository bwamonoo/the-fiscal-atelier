import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { TransactionHistoryHeader } from "../components/TransactionHistoryHeader";
import { FilterBar } from "../components/FilterBar";
import { TransactionList } from "../components/TransactionList";
import { MOCK_TRANSACTIONS } from "../constants";
import "./TransactionHistory.css";

export function TransactionHistory() {
  return (
    <>
      <title>The Fiscal Atelier - Transactions</title>

      <div class="app-container">
        <Sidebar />

        <main class="main-content">
          <Header pageTitle={"Transaction Ledger"} />

          <div class="content-wrapper">
            <TransactionHistoryHeader />
            <FilterBar />

            <TransactionList
              MOCK_TRANSACTIONS={MOCK_TRANSACTIONS}
              page={"TransactionHistory"}
            />
          </div>
        </main>
      </div>
    </>
  );
}
