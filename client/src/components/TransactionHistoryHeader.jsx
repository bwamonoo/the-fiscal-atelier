import { Link } from "react-router";

export function TransactionHistoryHeader() {
  return (
    <section class="history-header">
      <div class="header-info">
        <span class="label">Fiscal Overview</span>
        <h3 class="display-title">Curated History</h3>
      </div>
      <div class="header-actions">
        <button class="btn btn-secondary">
          <i data-lucide="download"></i> Export Statement
        </button>
        <Link to="/add-transaction" class="btn btn-primary">
          <i data-lucide="plus-circle"></i> New Entry
        </Link>
      </div>
    </section>
  );
}
