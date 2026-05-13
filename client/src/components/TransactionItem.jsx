import "./TransactionItem.css";

export function TransactionItem({ txn, amount, amountColor, page }) {
  const date = new Date(txn.date);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <tr>
      <td>{formattedDate}</td>
      <td>
        <div className="cat-cell">
          <i data-lucide={txn.icon}></i> {txn.category}
        </div>
      </td>
      <td>{txn.description}</td>
      <td>
        <span className={"badge badge-" + txn.type}>{txn.type}</span>
      </td>
      <td className={"text-right amount-" + amountColor}>{amount}</td>
      {page == "TransactionHistory" && (
        <td className="text-right">
          <button className="icon-btn-sm">
            <i data-lucide="edit-2"></i>
          </button>
          <button className="icon-btn-sm">
            <i data-lucide="trash-2"></i>
          </button>
        </td>
      )}
    </tr>
  );
}
