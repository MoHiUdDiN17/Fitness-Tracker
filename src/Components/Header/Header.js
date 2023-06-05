
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <header className="container mx-auto bg-white shadow-md">
            <nav className="p-5 flex bg-sky-100 justify-between items-center">
                <h1 class="text-yellow-600 text-2xl">Fitness-Score</h1>
                <ul className="flex justify-end items-center gap-4">
                    <li>
                        <a className="hover:text-orange-400 underline-offset-2 transition-all duration-150" href="#Home">Home</a>
                    </li>
                    <li>
                        <a className="hover:text-orange-400 underline-offset-2 transition-all duration-150" href="#Table">Table</a>
                    </li>
                    <li>
                        <a className="hover:text-orange-400 underline-offset-2 transition-all duration-150" href="#Highest-score">Highest-Score</a>
                    </li>
                    <li>
                        <a className="hover:text-orange-400 underline-offset-2 transition-all duration-150" href="#Calculate">Calculate</a>
                    </li>
                    <li>
                        <a className="hover:text-orange-400 underline-offset-2 transition-all duration-150" href="#Footer">Footer</a>
                    </li>
                </ul>
            </nav>
        </header>

    );
};

export default Header;










