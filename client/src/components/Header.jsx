export function Header() {
  return (
    <header className="top-bar">
      <h2 className="page-title">Transaction Management</h2>
      <div className="top-bar-actions">
        <button className="icon-btn">
          <i data-lucide="bell"></i>
        </button>
        <div className="user-profile">
          <img src="https://picsum.photos/seed/user/100/100" alt="User" />
        </div>
      </div>
    </header>
  );
}
