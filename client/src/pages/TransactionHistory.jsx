import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
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
            <section class="history-header">
              <div class="header-info">
                <span class="label">Fiscal Overview</span>
                <h3 class="display-title">Curated History</h3>
              </div>
              <div class="header-actions">
                <button class="btn btn-secondary">
                  <i data-lucide="download"></i> Export Statement
                </button>
                <a href="add-transaction.html" class="btn btn-primary">
                  <i data-lucide="plus-circle"></i> New Entry
                </a>
              </div>
            </section>

            <section class="filters-bar">
              <div class="filter-input">
                <i data-lucide="search"></i>
                <input type="text" placeholder="Search transactions..." />
              </div>
              <div class="filter-select">
                <i data-lucide="calendar"></i>
                <select>
                  <option>Current Month</option>
                </select>
              </div>
              <div class="filter-select">
                <i data-lucide="filter"></i>
                <select>
                  <option>All Categories</option>
                </select>
              </div>
              <button class="text-btn">Clear Filters</button>
            </section>

            <div class="table-card">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th class="text-right">Amount</th>
                    <th class="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_TRANSACTIONS.map((txn) => {
                    let amount = (txn.amountCents / 100).toFixed(2);
                    amount =
                      txn.type === "income" ? `$${amount}` : `-$${amount}`;
                    const amountColor = txn.type === "income" ? "pos" : "neg";

                    return (
                      <tr key={txn.id}>
                        <td>{txn.date}</td>
                        <td>
                          <div class="cat-cell">
                            <i data-lucide={txn.icon}></i> {txn.category}
                          </div>
                        </td>
                        <td>{txn.description}</td>
                        <td>
                          <span class={"badge badge-" + txn.type}>
                            {txn.type}
                          </span>
                        </td>
                        <td class={"text-right amount-" + amountColor}>
                          {amount}
                        </td>
                        <td class="text-right">
                          <button class="icon-btn-sm">
                            <i data-lucide="edit-2"></i>
                          </button>
                          <button class="icon-btn-sm">
                            <i data-lucide="trash-2"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>Oct 24, 2023</td>
                    <td>
                      <div class="cat-cell">
                        <i data-lucide="utensils"></i> Dining
                      </div>
                    </td>
                    <td>The Glass Atelier - Dinner Service</td>
                    <td>
                      <span class="badge badge-expense">Expense</span>
                    </td>
                    <td class="text-right amount-neg">-$248.50</td>
                    <td class="text-right">
                      <button class="icon-btn-sm">
                        <i data-lucide="edit-2"></i>
                      </button>
                      <button class="icon-btn-sm">
                        <i data-lucide="trash-2"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="pagination">
                <span>Showing 1 to 5 of 124 transactions</span>
                <div class="page-controls">
                  <button class="icon-btn-sm">
                    <i data-lucide="chevron-left"></i>
                  </button>
                  <button class="page-btn active">1</button>
                  <button class="page-btn">2</button>
                  <button class="icon-btn-sm">
                    <i data-lucide="chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
