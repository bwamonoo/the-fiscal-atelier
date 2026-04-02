import { Sidebar } from "../components/Sidebar";
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
          <header className="top-bar">
            <h2 className="page-title">The Editorial Ledger</h2>
            <div className="top-bar-actions">
              <button className="icon-btn">
                <i data-lucide="bell"></i>
                <span className="notification-dot"></span>
              </button>
              <div className="user-profile">
                <img src="https://picsum.photos/seed/user/100/100" alt="User" />
              </div>
            </div>
          </header>

          <div className="content-wrapper">
            <section className="hero-section">
              <div className="metric-group">
                <span className="label">Current Net Worth</span>
                <h3 className="balance">
                  ${netWorth}
                  <span className="decimals">{decimal}</span>
                </h3>
              </div>
              <div className="summary-cards">
                <div className="card card-income">
                  <div className="icon-box">
                    <i data-lucide="trending-up"></i>
                  </div>
                  <div className="card-info">
                    <span className="card-label">Monthly Income</span>
                    <span className="card-value">+$12,400</span>
                  </div>
                </div>
                <div className="card card-spending">
                  <div className="icon-box">
                    <i data-lucide="trending-down"></i>
                  </div>
                  <div className="card-info">
                    <span className="card-label">Monthly Spending</span>
                    <span className="card-value">-$4,210</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="chart-section">
              <div className="surface-card">
                <div className="card-header">
                  <h4>Spending Composition</h4>
                  <button className="text-btn">View Details</button>
                </div>
                <div className="chart-container">
                  <div className="pie-placeholder">
                    <div className="pie-center">
                      <span className="pie-label">Total</span>
                      <span className="pie-total">$4,210</span>
                    </div>
                  </div>
                  <div className="legend-grid">
                    {SPENDING_COMPOSITION.map((expense) => {
                      return (
                        <div key={expense.name} className="legend-item">
                          <span
                            className="dot"
                            style={{ background: expense.color }}
                          ></span>{" "}
                          {expense.name} <span>{expense.value}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            <section className="table-section">
              <div className="section-header">
                <h4>Recent Entries</h4>
                <button className="text-btn">
                  Archive Access <i data-lucide="arrow-right"></i>
                </button>
              </div>
              <div className="table-card">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Category</th>
                      <th>Description</th>
                      <th>Type</th>
                      <th className="text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_TRANSACTIONS.slice(0, 5).map((txn) => {
                      let amount = (txn.amountCents / 100).toFixed(2);
                      amount =
                        txn.type === "expense" ? `-$${amount}` : `$${amount}`;

                      return (
                        <tr key={txn.id}>
                          <td>{txn.date}</td>
                          <td>
                            <div className="cat-cell">
                              <i data-lucide={txn.icon}></i> {txn.category}
                            </div>
                          </td>
                          <td>{txn.description}</td>
                          <td>
                            <span className={"badge badge-" + txn.type}>
                              {txn.type}
                            </span>
                          </td>
                          <td className="text-right amount-neg">{amount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
