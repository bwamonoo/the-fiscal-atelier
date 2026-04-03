import { TransactionItem } from "./TransactionItem";

export function TransactionList({ MOCK_TRANSACTIONS, page }) {
  return (
    <div class="table-card">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Type</th>
            {page == "TransactionHistory" && (
              <>
                <th class="text-right">Amount</th>
                <th class="text-right">Actions</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {MOCK_TRANSACTIONS.map((txn) => {
            let amount = (txn.amountCents / 100).toFixed(2);
            amount = txn.type === "income" ? `$${amount}` : `-$${amount}`;
            const amountColor = txn.type === "income" ? "pos" : "neg";

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
          <div class="pagination">
            <span>Showing 1 to 5 of 124 transactions</span>
            <div class="page-controls">
              <button class="icon-btn-sm">
                <i data-lucide="chevron-left"></i>
              </button>
              <button class="page-btn active">1</button>
              <button class="page-btn">2</button>
              <button class="icon-btn-sm">
                <i data-lucide="chevron-right"></i>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
