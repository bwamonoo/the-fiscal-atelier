import "./ChartSection.css";

export function ChartSection({ SPENDING_COMPOSITION }) {
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
  );
}
