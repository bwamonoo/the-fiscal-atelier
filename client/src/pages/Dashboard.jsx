import "./Dashboard.css"

export function Dashboard() {
  return(
    <>
      <title>The Fiscal Atelier - Dashboard</title>
      
        <div className="app-container">

        <aside className="sidebar">
            <div className="sidebar-header">
                <h1 className="brand">The Fiscal Atelier</h1>
                <p className="tagline">Wealth Curation</p>
            </div>
            <nav className="nav-menu">
                <a href="/" className="nav-item active">
                    <i data-lucide="layout-dashboard"></i>
                    <span>Dashboard</span>
                </a>
                <a href="/transactions" className="nav-item">
                    <i data-lucide="receipt-text"></i>
                    <span>Transactions</span>
                </a>
            </nav>
            <div className="sidebar-action">
                <a href="/add-transaction" className="btn btn-primary btn-block">
                    <i data-lucide="plus"></i>
                    <span>Add Transaction</span>
                </a>
            </div>
            <div className="sidebar-footer">
                <a href="#" className="nav-item">
                    <i data-lucide="settings"></i>
                    <span>Settings</span>
                </a>
                <a href="#" className="nav-item">
                    <i data-lucide="help-circle"></i>
                    <span>Support</span>
                </a>
            </div>
        </aside>


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
                        <h3 className="balance">$142,850<span className="decimals">.00</span></h3>
                    </div>
                    <div className="summary-cards">
                        <div className="card card-income">
                            <div className="icon-box"><i data-lucide="trending-up"></i></div>
                            <div className="card-info">
                                <span className="card-label">Monthly Income</span>
                                <span className="card-value">+$12,400</span>
                            </div>
                        </div>
                        <div className="card card-spending">
                            <div className="icon-box"><i data-lucide="trending-down"></i></div>
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
                                <div className="legend-item"><span className="dot" style={{background: "#0040a1"}}></span> Housing <span>40%</span></div>
                                <div className="legend-item"><span className="dot" style={{background: "#4c6454"}}></span> Food <span>25%</span></div>
                                <div className="legend-item"><span className="dot" style={{background: "#81272b"}}></span> Transport <span>15%</span></div>
                                <div className="legend-item"><span className="dot" style={{background: "#cbd5e1"}}></span> Others <span>20%</span></div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="table-section">
                    <div className="section-header">
                        <h4>Recent Entries</h4>
                        <button className="text-btn">Archive Access <i data-lucide="arrow-right"></i></button>
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
                                <tr>
                                    <td>Oct 24, 2023</td>
                                    <td><div className="cat-cell"><i data-lucide="utensils"></i> Dining</div></td>
                                    <td>The Gilded Spoon - Debit Card</td>
                                    <td><span className="badge badge-expense">Expense</span></td>
                                    <td className="text-right amount-neg">-$142.50</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    </div>
    </>
  )
}