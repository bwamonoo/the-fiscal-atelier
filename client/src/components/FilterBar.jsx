import "./FilterBar.css";

export function FilterBar() {
  return (
    <section className="filters-bar">
      <div className="filter-input">
        <i data-lucide="search"></i>
        <input type="text" placeholder="Search transactions..." />
      </div>
      <div className="filter-select">
        <i data-lucide="calendar"></i>
        <select>
          <option>Current Month</option>
        </select>
      </div>
      <div className="filter-select">
        <i data-lucide="filter"></i>
        <select>
          <option>All Categories</option>
        </select>
      </div>
      <button className="text-btn">Clear Filters</button>
    </section>
  );
}
