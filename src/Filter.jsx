import React, { useContext, useState } from "react";
import { ExpenseContext } from "./Context";
import { Link } from "react-router-dom";

const Filter = () => {
    const [expenses] = useContext(ExpenseContext);

    const [key, setKey] = useState("payment");
    const [value, setValue] = useState("");
    const [filterExpenses, setFilterExpenses] = useState([]);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const filteredExpenses = expenses.filter((e) => e[key] === value);
        setFilterExpenses(filteredExpenses);
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <form className="mb-4" onSubmit={SubmitHandler}>
                <select
                    onChange={(e) => setKey(e.target.value)}
                    value={key}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                >
                    <option value="amount">Amount</option>
                    <option value="remark">Remark</option>
                    <option value="payment">Payment</option>
                    <option value="category">Category</option>
                </select>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    type="text"
                    className="w-full p-2 border rounded-md mt-2 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                    placeholder="Enter Value"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Filter
                </button>
            </form>
            <hr className="my-4" />
            {filterExpenses.length === 0 ? (
                <p className="text-gray-500 text-center">No filter selected</p>
            ) : (
                <div>
                    {filterExpenses.map((e, index) => (
                        <div
                            key={index}
                            className="mb-4 border-b border-gray-200 py-2 flex justify-between items-center transition duration-300 hover:bg-gray-100"
                        >
                            <span className="flex-1">
                                {e.remark} ({e.payment}) - {e.category} - ${e.amount}{" "}
                            </span>
                            <button className="text-red-500 focus:outline-none">
                                ❌
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <Link
                to="/show"
                className="text-blue-500 underline block mt-4 text-center transition duration-300 hover:text-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
                Go back
            </Link>
        </div>
    );
};

export default Filter;
