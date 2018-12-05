export default expenses => {
  if(!expenses.length) return 0;
  return expenses.reduce((sum, expense) => sum += expense.amount, 0);
};