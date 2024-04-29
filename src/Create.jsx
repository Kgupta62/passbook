import { useContext, useState } from "react";
import { ExpenseContext } from "./Context";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
    const [expenses, setExpenses] = useContext(ExpenseContext);
    const [amount, setAmount] = useState(0);
    const [remark, setRemark] = useState("");
    const [category, setCategory] = useState("");
    const [payment, setPayment] = useState("cash");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newExpense = { amount, remark, category, payment };
        const copyExpenses = [...expenses, newExpense]; // Adding new expense to the copy of expenses
        setExpenses(copyExpenses);
        localStorage.setItem("expenses", JSON.stringify(copyExpenses)); // Storing expenses in localStorage
        navigate("/show");
    };

    return (
        <form onSubmit={SubmitHandler} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add Expense</h2>
            <div className="mb-4">
                <input
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    type="number"
                    className="w-full p-2 border rounded-md"
                    placeholder="Amount"
                />
            </div>
            <div className="mb-4">
                <input
                    onChange={(e) => setRemark(e.target.value)}
                    value={remark}
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Remark"
                />
            </div>
            <div className="mb-4">
                <input
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Category"
                />
            </div>
            <div className="mb-4">
                <select
                    onChange={(e) => setPayment(e.target.value)}
                    value={payment}
                    className="w-full p-2 border rounded-md"
                    name="payment"
                >
                    <option value="cash">Cash</option>
                    <option value="online">Online</option>
                    <option value="card">Card</option>
                </select>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
                Add Expense
            </button>
        </form>
    );
};

export default Create;
