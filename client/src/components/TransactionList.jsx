import "./TransactionList.css";
import { TransactionItem } from "./TransactionItem";

export function TransactionList({ transactions, page }) {
  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Type</th>
            {page == "TransactionHistory" && (
              <>
                <th className="text-right">Amount</th>
                <th className="text-right">Actions</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => {
            let amountColor;
            let amount = (txn.amountCents / 100).toFixed(2);

            if (txn.type === "income") {
              amountColor = "pos";
              amount = "$" + amount;
            } else {
              amountColor = "neg";
              amount = "-$" + amount;
            }

            return (
              <TransactionItem
                key={txn.id}
                txn={txn}
                amountColor={amountColor}
                amount={amount}
                page={page}
              />
            );
          })}
        </tbody>
      </table>
      {page == "TransactionHistory" && (
        <>
          <div className="pagination">
            <span>Showing 1 to 5 of 124 transactions</span>
            <div className="page-controls">
              <button className="icon-btn-sm">
                <i data-lucide="chevron-left"></i>
              </button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="icon-btn-sm">
                <i data-lucide="chevron-right"></i>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
