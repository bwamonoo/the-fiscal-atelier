import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { TransactionForm } from "../components/TransactionForm";
import "./AddTransaction.css";

export function AddTransaction() {
  return (
    <>
      <title>The Fiscal Atelier - Add Transaction</title>

      <div className="app-container">
        <Sidebar />

        <main className="main-content">
          <Header pageTitle={"Transaction Management"} />

          <div className="content-wrapper centered">
            <div className="breadcrumb">
              <span>Ledger</span> <i data-lucide="chevron-right"></i>{" "}
              <span className="active">New Entry</span>
            </div>

            <TransactionForm />

            <div className="tip-box">
              {/* <i data-lucide="lightbulb"></i>
              <div className="tip-content">
                <h5>Atelier Wisdom</h5>
                <p>
                  Categorizing transactions accurately helps our AI curator
                  provide better insights into your spending habits.
                </p>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
