import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="flex justify-center space-x-4 p-4 bg-blue-500 text-white">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/create" className="hover:underline">Create</Link>
            <Link to="/show" className="hover:underline">Show</Link>
        </div>
    );
};

export default Nav;
