import "./SummaryCards.css";

export function SummaryCards({ netWorth, decimal }) {
  return (
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
  );
}
