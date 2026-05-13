import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { api } from "../api/axios";
import "./TransactionForm.css";

export function TransactionForm() {
  const navigate = useNavigate();

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${yyyy}-${mm}-${dd}`;

  const [transactionCategories, setTransactionCategories] = useState([]);
  const [txnType, setTxnType] = useState("expense");
  const [txnAmount, setTxnAmount] = useState("0.00");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(formattedDate);
  const [description, setDescription] = useState("");

  // console.log("des:", description);

  const createTransaction = async (event) => {
    if (event) event.preventDefault();

    try {
      const response = await api.post("/transactions", {
        category,
        description,
        type: txnType,
        amountCents: +txnAmount * 100,
        date,
      });

      console.log("created txn:", response.data);
      navigate("/transactions", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getTransactionCategories = async () => {
      try {
        const response = await api.get("/transactions/categories");
        setTransactionCategories(response.data.data.categories);
      } catch (error) {
        console.log(error);
      }
    };

    getTransactionCategories();
  }, []);

  return (
    <div className="form-card">
      <div className="accent-line"></div>
      <form onSubmit={createTransaction}>
        <div className="form-group">
          <label>Transaction Type</label>
          <div className="toggle-group">
            <button
              type="button"
              className={`toggle-btn ${txnType === "expense" && "active"}`}
              onClick={() => setTxnType("expense")}
            >
              <i data-lucide="minus-circle"></i> Expense
            </button>
            <button
              type="button"
              className={`toggle-btn ${txnType === "income" && "active"}`}
              onClick={() => setTxnType("income")}
            >
              <i data-lucide="plus-circle"></i> Income
            </button>
          </div>
        </div>

        <div className="form-group">
          <label>Total Amount</label>
          <div className="amount-input">
            <span className="currency">$</span>
            <input
              type="text"
              value={txnAmount}
              onChange={(event) => setTxnAmount(event.target.value)}
            />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Category</label>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              {transactionCategories.map((cat) => {
                return (
                  <option value={cat} key={cat}>
                    {cat}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Date of Transaction</label>
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Note / Description</label>
          <textarea
            onChange={(event) => setDescription(event.target.value)}
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
