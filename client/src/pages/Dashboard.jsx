import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { SummaryCards } from "../components/SummaryCards";
import { ChartSection } from "../components/ChartSection";
import { TransactionList } from "../components/TransactionList";
import { MOCK_TRANSACTIONS } from "../constants";
import { SPENDING_COMPOSITION } from "../constants";
import "./Dashboard.css";

export function Dashboard() {
  let netWorth = 0;

  MOCK_TRANSACTIONS.forEach((txn) => {
    txn.type === "income"
      ? (netWorth += txn.amountCents)
      : (netWorth -= txn.amountCents);
  });

  console.log("net", (netWorth / 100).toFixed(2));
  netWorth = String((netWorth / 100).toFixed(2)).slice(0, -3);
  const decimal = String((netWorth / 100).toFixed(2)).slice(-3);

  return (
    <>
      <title>The Fiscal Atelier - Dashboard</title>

      <div className="app-container">
        <Sidebar />

        <main className="main-content">
          <Header pageTitle={"The Editorial Ledger"} />

          <div className="content-wrapper">
            <SummaryCards netWorth={netWorth} decimal={decimal} />
            <ChartSection SPENDING_COMPOSITION={SPENDING_COMPOSITION} />

            <section className="table-section">
              <div className="section-header">
                <h4>Recent Entries</h4>
                <button className="text-btn">
                  Archive Access <i data-lucide="arrow-right"></i>
                </button>
              </div>
              <TransactionList
                MOCK_TRANSACTIONS={MOCK_TRANSACTIONS}
                page={"Dashboard"}
              />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
