import React from "react";

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 rounded-md shadow-lg mt-10">
            <h1 className="text-4xl font-bold mb-4">Welcome to Modern Passbook</h1>
            <p className="text-lg mb-6">An interactive expense tracker for modern living</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-700 p-6 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Track Your Expenses</h2>
                    <p>Effortlessly keep track of your spending in a user-friendly interface.</p>
                </div>
                <div className="bg-blue-700 p-6 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Set Budget Goals</h2>
                    <p>Define your budget and monitor your expenses to stay on track.</p>
                </div>
                <div className="bg-blue-700 p-6 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-2">View Detailed Reports</h2>
                    <p>Analyze your spending habits with detailed reports and insights.</p>
                </div>
                <div className="bg-blue-700 p-6 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Secure & Private</h2>
                    <p>Your data is safe and private with our advanced security measures.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
