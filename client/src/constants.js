export const MOCK_TRANSACTIONS= [
  {
    id: '1',
    date: 'Oct 24, 2023',
    category: 'Dining',
    description: 'The Gilded Spoon - Debit Card • 4492',
    type: 'expense',
    amountCents: 14250,
    icon: 'Utensils',
  },
  {
    id: '2',
    date: 'Oct 23, 2023',
    category: 'Revenue',
    description: 'Lumina Creative Agency - Direct Deposit',
    type: 'income',
    amountCents: 420000,
    icon: 'Briefcase',
  },
  {
    id: '3',
    date: 'Oct 22, 2023',
    category: 'Lifestyle',
    description: 'Atelier Modern - Credit Card • 1022',
    type: 'expense',
    amountCents: 89500,
    icon: 'ShoppingBag',
  },
  {
    id: '4',
    date: 'Oct 21, 2023',
    category: 'Transportation',
    description: 'Private Chauffeur - Airport Transfer',
    type: 'expense',
    amountCents: 8500,
    icon: 'Car',
  },
  {
    id: '5',
    date: 'Oct 20, 2023',
    category: 'Services',
    description: 'Cloud Services Plus - Recurring Payment',
    type: 'expense',
    amountCents: 2499,
    icon: 'Cloud',
  },
  {
    id: '6',
    date: 'Oct 15, 2023',
    category: 'Housing',
    description: 'Mortgage Payment - Bank Transfer',
    type: 'expense',
    amountCents: 215000,
    icon: 'Home',
  },
];

export const SPENDING_COMPOSITION = [
  { name: 'Housing', value: 40, color: '#0040a1' },
  { name: 'Food', value: 25, color: '#4c6454' },
  { name: 'Transport', value: 15, color: '#81272b' },
  { name: 'Others', value: 20, color: '#cbd5e1' },
];

export const CATEGORIES = [
  'Housing',
  'Dining',
  'Revenue',
  'Lifestyle',
  'Transportation',
  'Services',
  'Entertainment',
  'Health',
  'Other'
];
