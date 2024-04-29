import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative bg-blue-500">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="block lg:hidden absolute top-4 right-4 z-10 bg-transparent text-white focus:outline-none"
            >
                {isMenuOpen ? "Close" : "Menu"}
            </button>

            <div className="hidden lg:flex justify-center p-4">
                <Link to="/" className="hover:underline text-white mr-4">Home</Link>
                <Link to="/create" className="hover:underline text-white mr-4">Create</Link>
                <Link to="/show" className="hover:underline text-white">Show</Link>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden bg-blue-500 text-white absolute top-16 left-0 w-full z-20">
                    <Link to="/" className="block py-2 px-4 hover:bg-blue-600">Home</Link>
                    <Link to="/create" className="block py-2 px-4 hover:bg-blue-600">Create</Link>
                    <Link to="/show" className="block py-2 px-4 hover:bg-blue-600">Show</Link>
                </div>
            )}
        </div>
    );
};

export default Nav;
