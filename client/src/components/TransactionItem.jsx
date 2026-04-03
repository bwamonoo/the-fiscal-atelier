export function TransactionItem({ txn, amount, amountColor, page }) {
  return (
    <tr key={txn.id}>
      <td>{txn.date}</td>
      <td>
        <div class="cat-cell">
          <i data-lucide={txn.icon}></i> {txn.category}
        </div>
      </td>
      <td>{txn.description}</td>
      <td>
        <span class={"badge badge-" + txn.type}>{txn.type}</span>
      </td>
      <td class={"text-right amount-" + amountColor}>{amount}</td>
      {page == "TransactionHistory" && (
        <td class="text-right">
          <button class="icon-btn-sm">
            <i data-lucide="edit-2"></i>
          </button>
          <button class="icon-btn-sm">
            <i data-lucide="trash-2"></i>
          </button>
        </td>
      )}
    </tr>
  );
}
