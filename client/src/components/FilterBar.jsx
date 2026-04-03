export function FilterBar() {
  return (
    <section class="filters-bar">
      <div class="filter-input">
        <i data-lucide="search"></i>
        <input type="text" placeholder="Search transactions..." />
      </div>
      <div class="filter-select">
        <i data-lucide="calendar"></i>
        <select>
          <option>Current Month</option>
        </select>
      </div>
      <div class="filter-select">
        <i data-lucide="filter"></i>
        <select>
          <option>All Categories</option>
        </select>
      </div>
      <button class="text-btn">Clear Filters</button>
    </section>
  );
}
