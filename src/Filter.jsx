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
                    className="w-full p-2 border rounded-md"
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
                    className="w-full p-2 border rounded-md mt-2"
                    placeholder="Enter Value"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600 transition duration-300"
                >
                    Filter
                </button>
            </form>
            <hr />
            {filterExpenses.length === 0 ? (
                <p className="text-gray-500">No filter selected</p>
            ) : (
                <div>
                    {filterExpenses.map((e, index) => (
                        <p
                            key={index}
                            className="mb-2 flex justify-between items-center"
                        >
                            <span>
                                {e.remark} ({e.payment}) - {e.category} - ${e.amount}{" "}
                            </span>
                            <button className="text-red-500 focus:outline-none">
                                ❌
                            </button>
                        </p>
                    ))}
                </div>
            )}
            <Link
                to="/show"
                className="text-blue-500 underline block mt-4"
            >
                Go back
            </Link>
        </div>
    );
};

export default Filter;
