import { useContext } from "react";
import { ExpenseContext } from "./Context";
import { Link } from "react-router-dom";

const Show = () => {
    const [expenses, setExpenses] = useContext(ExpenseContext);

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <Link
                to="/filter"
                className="text-blue-500 underline mb-4 inline-block transition duration-300 hover:text-blue-700"
            >
                Filter Expenses
            </Link>
            <h2 className="text-2xl font-bold mb-4">
                Total Spent: ${expenses.reduce((ac, cv) => ac + +cv.amount, 0).toFixed(2)}
            </h2>
            {expenses.length === 0 ? (
                <p className="text-gray-500">No Data Present</p>
            ) : (
                <ul>
                    {expenses.map((e, index) => (
                        <li
                            key={index}
                            className="border-b py-4 flex justify-between items-center transition duration-300 hover:bg-gray-50"
                        >
                            <div>
                                <p className="text-lg font-semibold">{e.remark} ({e.payment})</p>
                                <p className="text-gray-500">{e.category} - ${e.amount}</p>
                            </div>
                            <button className="text-red-500 focus:outline-none hover:text-red-700">
                                ❌
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Show;
