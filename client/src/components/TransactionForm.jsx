import "./TransactionForm.css";

export function TransactionForm() {
  return (
    <div className="form-card">
      <div className="accent-line"></div>
      <form>
        <div className="form-group">
          <label>Transaction Type</label>
          <div className="toggle-group">
            <button type="button" className="toggle-btn active">
              <i data-lucide="minus-circle"></i> Expense
            </button>
            <button type="button" className="toggle-btn">
              <i data-lucide="plus-circle"></i> Income
            </button>
          </div>
        </div>

        <div className="form-group">
          <label>Total Amount</label>
          <div className="amount-input">
            <span className="currency">$</span>
            <input type="text" placeholder="0.00" />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Category</label>
            <select>
              <option>Select Category</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date of Transaction</label>
            <input type="date" />
          </div>
        </div>

        <div className="form-group">
          <label>Note / Description</label>
          <textarea
            placeholder="What was this transaction for?"
            rows="2"
          ></textarea>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary btn-large">
            Save Transaction
          </button>
          <a href="/" className="btn btn-outline btn-large">
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
