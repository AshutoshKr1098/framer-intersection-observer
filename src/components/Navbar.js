import '../assets/Navbar.css';
const Navbar = () => {
    return (
        <div className="navbar">
            <heading className="navbar-title">
                <h1 className="navbar-heading">ASHUTOSH KUMAR</h1>
            </heading>
            <div className="navbar-links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>                    
                </ul>
            </div>
        </div>
    );
}
export default Navbar;