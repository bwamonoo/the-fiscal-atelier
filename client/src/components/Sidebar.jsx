import { Link } from "react-router";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="brand">The Fiscal Atelier</h1>
        <p className="tagline">Wealth Curation</p>
      </div>
      <nav className="nav-menu">
        <Link to="/" className="nav-item active">
          <i data-lucide="layout-dashboard"></i>
          <span>Dashboard</span>
        </Link>
        <Link to="/transactions" className="nav-item">
          <i data-lucide="receipt-text"></i>
          <span>Transactions</span>
        </Link>
      </nav>
      <div className="sidebar-action">
        <Link to="/add-transaction" className="btn btn-primary btn-block">
          <i data-lucide="plus"></i>
          <span>Add Transaction</span>
        </Link>
      </div>
      <div className="sidebar-footer">
        <Link to="#" className="nav-item">
          <i data-lucide="settings"></i>
          <span>Settings</span>
        </Link>
        <Link to="#" className="nav-item">
          <i data-lucide="help-circle"></i>
          <span>Support</span>
        </Link>
      </div>
    </aside>
  );
}
