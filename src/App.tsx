import { useState } from "react";

import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
// import ExpenseForm from "./Form";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";
// import ExpenseForm from './expense-tracker/components/ExpenseForm';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "teest", amount: 13, category: "Utilities" },
    { id: 2, description: "tesrt", amount: 14, category: "Utilities" },
    { id: 3, description: "testt", amount: 155, category: "Utilities" },
    { id: 4, description: "testy", amount: 109, category: "Utilities" },
    { id: 5, description: "tesllaltt", amount: 155, category: "Utilities" },
    { id: 6, description: "teddsty", amount: 109, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </>
  );
}

export default App;
