import { Link } from "react-router";
import "./TransactionHistoryHeader.css";

export function TransactionHistoryHeader() {
  return (
    <section className="history-header">
      <div className="header-info">
        <span className="label">Fiscal Overview</span>
        <h3 className="display-title">Curated History</h3>
      </div>
      <div className="header-actions">
        <button className="btn btn-secondary">
          <i data-lucide="download"></i> Export Statement
        </button>
        <Link to="/add-transaction" className="btn btn-primary">
          <i data-lucide="plus-circle"></i> New Entry
        </Link>
      </div>
    </section>
  );
}
