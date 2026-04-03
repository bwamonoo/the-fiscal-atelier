export function Header({ pageTitle }) {
  return (
    <header className="top-bar">
      <h2 className="page-title">{pageTitle}</h2>
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
