import { formatMoney } from "../utils/money";
import "./ChartSection.css";

export function ChartSection({ expenses }) {
  const { spendingComposition = [], totalExpense = 0 } = expenses;
  return (
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
              <span className="pie-total">{formatMoney(totalExpense)}</span>
            </div>
          </div>
          <div className="legend-grid">
            {spendingComposition.map((expense) => {
              return (
                <div key={expense.name} className="legend-item">
                  <span
                    className="dot"
                    style={{ background: expense.color }}
                  ></span>{" "}
                  {expense.name} <span>{expense.value.toFixed(0)}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
