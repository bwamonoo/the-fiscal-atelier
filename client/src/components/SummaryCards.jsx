import "./SummaryCards.css";
import { formatMoney } from "../utils/money";

export function SummaryCards({ transactionSummary }) {
  const { income, expense, monthlyBalance } = transactionSummary;

  console.log("net", (monthlyBalance / 100).toFixed(2));

  const formattedMonthlyBalance = formatMoney(monthlyBalance);

  const nonDecimalPart = formattedMonthlyBalance.slice(0, -3);
  const decimalPart = formattedMonthlyBalance.slice(-3);

  return (
    <section className="hero-section">
      <div className="metric-group">
        <span className="label">Balance</span>
        <h3 className="balance">
          {nonDecimalPart}
          <span className="decimals">{decimalPart}</span>
        </h3>
      </div>
      <div className="summary-cards">
        <div className="card card-income">
          <div className="icon-box">
            <i data-lucide="trending-up"></i>
          </div>
          <div className="card-info">
            <span className="card-label">Monthly Income</span>
            <span className="card-value">{formatMoney(income)}</span>
          </div>
        </div>
        <div className="card card-spending">
          <div className="icon-box">
            <i data-lucide="trending-down"></i>
          </div>
          <div className="card-info">
            <span className="card-label">Monthly Expense</span>
            <span className="card-value">-{formatMoney(expense)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
